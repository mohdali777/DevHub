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
res.cookie("RefreshToken",Result.RefreshToken,{
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

GoogleAuth:RequestHandler = async(req,res,next)=>{
try {
const {token} = req.body
const Result = await this.AuthService.GoogleSignin(token)
res.cookie("RefreshToken",Result.RefreshToken,{
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

signup:RequestHandler = async(req,res,next)=>{
try {
const Data = req.body  
const Result = await this.AuthService.Signup(Data)
res.cookie("RefreshToken",Result.RefreshToken,{
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

GenarateAccess:RequestHandler = async(req,res,next)=>{
try {
const RefreshToken = req.cookies.RefreshToken
const AccessToken = await this.AuthService.GenarateAcesss(RefreshToken)
res.cookie("AccessToken",AccessToken,{
httpOnly:true,
secure:process.env.NODE_ENV === "production",
sameSite:"lax",
maxAge: 900000,
path:"/"
})
res.status(201).json({message:"access token genarated success"})
} catch (error) {
next(error)
}
}

VerifyUser:RequestHandler = async(req,res,next)=>{
try {
const RefreshToken = req.cookies.RefreshToken
const Data = await this.AuthService.VerifyUser(RefreshToken)
res.status(201).json(Data)
} catch (error) {
next(error)
}
}

Logout:RequestHandler = async(req,res,next)=>{
try {
res.clearCookie("AccessToken",{path:"/"})
res.clearCookie("RefreshToken",{path:"/"})
res.status(200).json({message:"logout successful"})
} catch (error) {
next(error)    
}
}
}