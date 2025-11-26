export interface TokenPayload{
UserId:string
UserName:string
UserEmail:string
ImageUrl:string
Role:string
IsVerified:boolean
Badge:string
}
export interface LoginPayload{
name?:string,
email:string,
password:string
}

export interface ReturnPayload{
AccessToken:string,
RefreshToken:string,
TokenPayload:TokenPayload
}