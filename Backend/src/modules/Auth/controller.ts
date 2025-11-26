import { inject, injectable } from "tsyringe";
import { IAuthService } from "./Service/interface";
import { RequestHandler } from "express";

@injectable()
export default class AuthControllers{
constructor(@inject("authService") private AuthService:IAuthService){}
Login:RequestHandler = async(req,res,next)=>{
try {
const Data = req.body
const Result = await this.AuthService.Login(Data)
res.cookie("refreshToken",Result.RefreshToken,{
httpOnly:true,
secure:process.env.NODE_ENV === "production",
sameSite:"lax",
maxAge: 7 * 24 * 60 * 60 * 1000,
path:"/"
})
res.cookie("AccessToken",Result.AccessToken,{
httpOnly:true,
secure:process.env.NODE_ENV === "production",
sameSite:"lax",
maxAge: 900000,
path:"/"
})
res.status(200).json({message:"Login successful",...Result})
} catch (error) {
next(error)     
}
}

signup:RequestHandler = async(req,res,next)=>{
try {
const Data = req.body  
const Result = await this.AuthService.Signup(Data)
res.cookie("refreshToken",Result.RefreshToken,{
httpOnly:true,
secure:process.env.NODE_ENV === "production",
sameSite:"lax",
maxAge: 7 * 24 * 60 * 60 * 1000,
path:"/"
})
res.cookie("AccessToken",Result.AccessToken,{
httpOnly:true,
secure:process.env.NODE_ENV === "production",
sameSite:"lax",
maxAge: 900000,
path:"/"
})
res.status(201).json({message:"Signup successful",...Result})
} catch (error) {
next(error)    
}
}

GoogleAuth:RequestHandler = async(req,res,next)=>{
try {
const {token} = req.body
const Result = await this.AuthService.GoogleSignin(token)
res.cookie("refreshToken",Result.RefreshToken,{
httpOnly:true,
secure:process.env.NODE_ENV === "production",
sameSite:"lax",
maxAge: 7 * 24 * 60 * 60 * 1000,
path:"/"
})
res.cookie("AccessToken",Result.AccessToken,{
httpOnly:true,
secure:process.env.NODE_ENV === "production",
sameSite:"lax",
maxAge: 900000,
path:"/"
})
res.status(200).json({message:"Google Signin successful",...Result})
} catch (error) {
next(error)
}
}
}