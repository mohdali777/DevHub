import { LoginPayload, ReturnPayload } from "../DTO";

export interface IAuthService{
Login(Payload:LoginPayload):Promise<ReturnPayload>
GenarateAcesss(RefreshToken:string):Promise<string>
VerifyUser(RefreshToken:string):Promise<Partial<ReturnPayload>>
GoogleSignin(Token:string):Promise<ReturnPayload>
}