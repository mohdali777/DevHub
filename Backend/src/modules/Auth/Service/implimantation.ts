import { inject, injectable } from "tsyringe";
import { LoginPayload, ReturnPayload } from "../DTO";
import { IAuthService } from "./interface";
import GoogleAuthClient from "../../../core/utils/googleoauth";
import { IUserRepo } from "../../User/Repo/interface";

@injectable()
export default class AuthService implements IAuthService{
constructor(
@inject("userRepo") private userRepo:IUserRepo,  
@inject("userService") private userService:any
){}
async Login(Payload: LoginPayload): Promise<ReturnPayload> {

}

async GenarateAcesss(RefreshToken: string): Promise<string> { 

}

async GoogleSignin(Token: string): Promise<ReturnPayload> {
try {
const Payload = await GoogleAuthClient.VerifyToken(Token)
const {email,name,googleId} = Payload
const IsUser = await this.userRepo.FindOne({email:email})
if(IsUser.googleid == null){

}
} catch (error) {
throw error
}
}

async VerifyUser(RefreshToken: string): Promise<Partial<ReturnPayload>> {

}
}