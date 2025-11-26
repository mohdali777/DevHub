import { injectable } from "tsyringe";
import { BaseEntity } from "../../core/BaseClass/BaseEntity/BaseEntity";
import AppError from "../../core/Error/Error";
import { USER_DTO_DB, USER_DTO_REQ } from "./DTO";
@injectable()
export default class UserEntity extends BaseEntity{
Create(Data:Partial<USER_DTO_REQ>):USER_DTO_DB {
this.ValidateCreate(Data)
return this.ReturnData(Data)
}    

Update(Data:Partial<USER_DTO_REQ>):Partial<USER_DTO_DB> {
const Updated:Partial<USER_DTO_DB> = {}
this._CheckRequiredString(Data.name,"Name")
Updated.name = Data.name
if(Data.googleid){
this._CheckRequiredString(Data.googleid,"Google ID")
Updated.googleid = Data.googleid
}
if(Data.bio){
this._CheckRequiredString(Data.bio,"Bio")
Updated.bio = Data.bio
}
return Updated
}

private ValidateCreate(Data:Partial<USER_DTO_REQ>):void{     
if(Data.name){
this._CheckRequiredString(Data.name,"user name")    
}         
this._EmailValidation(Data.email)
this._CheckRequiredString(Data.password,"Password")
if(!Data.is_signup){
this._validateRole(Data.role!)
this._CheckBoolean(Data.is_verified,"Is Verified")
if(Data.is_verified){
this._validateBadge(Data.badge!)
}
}  
} 

private _validateRole(Role:string):void{
if(!["admin","user","author"].includes(Role)){
throw new AppError("Invalid Role",400)
}
}

private _validateBadge(Role:string):void{
if(!["none","blue","silver","gold","red"].includes(Role)){
throw new AppError("Invalid Role",400)
}
}

private ReturnData(Data:Partial<USER_DTO_REQ>):USER_DTO_DB{
return{
name: Data.name??"User",
email: Data.email!,
image:{
image_url:"",
public_id:""
},
password:Data.password??"12345678",
googleid:Data.is_google_signup?Data.googleid!:null,
role:Data.is_signup?"user": Data.role!,
is_verified:Data.is_signup ? false:Data.is_verified!,
badge:Data.is_signup && !Data.is_verified ? "none" : Data.badge!,
saved_articles: [],
bio:"",     
}
}
}
