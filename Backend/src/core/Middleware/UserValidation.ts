import { inject, injectable } from "tsyringe";
import { NextFunction, Request, Response } from "express";
import { IUserRepo } from "../../modules/User/Repo/interface";
import { TokenManagement } from "../utils/TokenService";
import { TokenPayload } from "../../modules/Auth/DTO";

@injectable()
export default class UserValidationMiddleware {
constructor(
@inject("userRepo") private userRepo: IUserRepo,
@inject("tokenService") private tokenService: TokenManagement
){}

UserCheck = async (req: Request, res: Response, next: NextFunction) => {
try {
const accessToken = req.cookies?.AccessToken;
const refreshToken = req.cookies?.RefreshToken;
if (!refreshToken) {
return res
.status(401)
.json({ CODE: "REFRESH_MISSING", message: "Refresh token missing" });
}
let UserId:string|null = null
try {
const refreshPayload:TokenPayload = this.tokenService.verifyRefreshToken(
refreshToken
) 
UserId = refreshPayload.UserId
} catch (err) {
return res
.status(401)
.json({ CODE: "REFRESH_INVALID", message: "Refresh token invalid" });
}
if (!UserId) {
return res
.status(401)
.json({ CODE: "REFRESH_INVALID", message: "Invalid refresh payload" });
}
const user = await this.userRepo.FindOne({ _id: UserId });

if (!user) {
return res
.status(401)
.json({ CODE: "USER_MISSING", message: "User not found" });
}

if (user.status === "blocked" || user.status === "inactive") {
return res.status(401).json({
CODE: "USER_INVALID",
message: "User is blocked or inactive",
});
}

if (!accessToken) {
return res.status(401).json({
CODE: "ACCESS_MISSING",
message: "Access token missing",
});
}

try {
this.tokenService.verifyAccessToken(accessToken);
} catch (err) {
return res
.status(401)
.json({ CODE: "ACCESS_INVALID", message: "Access token invalid" });
}

(req as any).user = user;

return next();
} catch (err) {
console.error("Error in UserValidationMiddleware:", err);
return res.status(500).json({
CODE: "INTERNAL_ERROR",
message: "Something went wrong",
});
}
};
}
