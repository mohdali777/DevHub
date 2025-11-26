import { LoginPayload, ReturnPayload, TokenPayload } from "../DTO";

export interface IAuthService{
Login(Payload:LoginPayload):Promise<ReturnPayload>
Signup(Payload:LoginPayload):Promise<ReturnPayload>
GenarateAcesss(RefreshToken:string):Promise<string>
VerifyUser(RefreshToken:string):Promise<Partial<TokenPayload>>
GoogleSignin(Token:string):Promise<ReturnPayload>
}