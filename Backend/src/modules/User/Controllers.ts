import { RequestHandler } from "express";
import { inject, injectable } from "tsyringe";
import { IUserService } from "./Services/interface";

@injectable()
export default class UserControllers{
constructor(@inject("userService") private UserService:IUserService){}
Create:RequestHandler = async(req,res,next)=>{
try {
const Data = req.body
const id = await this.UserService.Create(Data)
res.status(201).json({message:"User created successfully",id})
} catch (error) {
next(error)
}
}

FindById:RequestHandler = async(req,res,next)=>{
try {
const {id} = req.params
const User = await this.UserService.FindById(id)
res.status(200).json({message:"User fetched successfully",data:User})
} catch (error) {
next(error)     
}
}
}
