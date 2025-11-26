import { inject, injectable } from "tsyringe";
import { LoginPayload, ReturnPayload, TokenPayload } from "../DTO";
import { IAuthService } from "./interface";
import GoogleAuthClient from "../../../core/utils/googleoauth";
import { IUserRepo } from "../../User/Repo/interface";
import { IUserService } from "../../User/Services/interface";
import { TokenManagement } from "../../../core/utils/TokenService";
import { USER_DTO_REQ } from "../../User/DTO";
import AppError from "../../../core/Error/Error";
import { BcryptManager } from "../../../core/utils/Passwordhashing";

@injectable()
export default class AuthService implements IAuthService{
constructor(
@inject("userRepo") private userRepo:IUserRepo,  
@inject("userService") private userService:IUserService,
@inject("tokenService") private TokenManagement:TokenManagement,
){}
async Login(Payload: LoginPayload): Promise<ReturnPayload> {
try {
const isUser =  await this.userRepo.FindOne({email:Payload.email})
if(!isUser) throw new AppError("Invalid credentials",401)
const isPasswordValid = await BcryptManager.dcrypt(Payload.password,isUser.password)  
if(!isPasswordValid) throw new AppError("Invalid credentials",401)
const TokenPayload:TokenPayload = {
UserId:isUser._id,
UserName:isUser.name,
UserEmail:isUser.email,
ImageUrl: isUser.image?.image_url || "",
Role:isUser.role,
IsVerified: isUser.is_verified,
Badge:isUser.badge
}
const AccessToken =  this.TokenManagement.generateAccessToken(TokenPayload)
const RefreshToken = this.TokenManagement.generateRefreshToken(TokenPayload)
return {AccessToken,RefreshToken,TokenPayload}
} catch (error) {
throw error    
}
}

async Signup(Payload: LoginPayload): Promise<ReturnPayload> {
try {
const isUser = await this.userRepo.FindOne({email:Payload.email})
if(isUser) throw new AppError("email alredy taken",409) 
const NewUserPayload:Partial<USER_DTO_REQ> = {
email:Payload.email,
password:Payload.password,
name:Payload.name,
is_signup:true,
is_google_signup:false,
}    
const id = await this.userService.Create(NewUserPayload)
const TokenPayload:TokenPayload = {
UserId:id,
UserName:Payload.name || "User",
UserEmail:Payload.email,
ImageUrl: "",
Role:"user",
IsVerified: false,
Badge:"none"
}
const AccessToken = this.TokenManagement.generateAccessToken(TokenPayload)
const RefreshToken = this.TokenManagement.generateRefreshToken(TokenPayload)
return {AccessToken,RefreshToken,TokenPayload}
} catch (error) {
throw error
}
}

async GenarateAcesss(RefreshToken: string): Promise<string> { 
try {
    return ""
} catch (error) {
throw error  
}
}

async GoogleSignin(Token: string): Promise<ReturnPayload> {
try {    
const Payload:any = await GoogleAuthClient.VerifyToken(Token)
const IsUser = await this.userRepo.FindOne({email:Payload?.email})
const UserPaylod:TokenPayload = {
UserId: IsUser?._id || "",
UserName:IsUser?.name || Payload.name || "User",
UserEmail: IsUser?.email || Payload.email || "",
ImageUrl: "",
Role: IsUser?.role || "user",
IsVerified: IsUser?.is_verified || false,
Badge:IsUser?.badge || "none"
}
if(!IsUser){
const NewUserPayload:Partial<USER_DTO_REQ> = {
name:Payload.name,
email:Payload.email,
googleid:Payload.sub,
password:"12345678Ab@",
is_signup:false,
is_google_signup:true,
}
const id = await this.userService.Create(NewUserPayload)
UserPaylod.UserId = id
}else if(IsUser && !IsUser.googleid){
const UpdatePayload = {
googleid:Payload?.sub,
}
await this.userService.Update(IsUser._id,UpdatePayload)
} 
const AccessToken =  this.TokenManagement.generateAccessToken(UserPaylod as TokenPayload)
const RefreshToken = this.TokenManagement.generateRefreshToken(UserPaylod as TokenPayload)
return {AccessToken,RefreshToken,TokenPayload:UserPaylod as TokenPayload}
} catch (error) {
throw error
}
}



async VerifyUser(RefreshToken: string): Promise<Partial<ReturnPayload>> {
try {
return {}
} catch (error) {
throw error
}
}
}