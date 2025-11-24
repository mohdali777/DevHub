import mongoose from "mongoose";
import { IUser } from "./Interface";

const UserSchema = new mongoose.Schema<IUser>({
name:{type:String,required:true},
email:{type:String,required:true,unique:true},
image:{image_url:{type:String,required:true},public_id:{type:String,required:true}},
password:{type:String,required:true},
googleid:{type:String,default:null}, 
role:{type:String,enum:["admin","user","author"],default:"user"},
is_verified:{type:Boolean,default:false},
badge:{type:String,enum:["none","blue","silver","gold","red"],default:"none"},
saved_articles:[{type:mongoose.Schema.Types.ObjectId,ref:"article",default:[]}],
bio:{type:String,default:""},
},{timestamps:true});


const UserModel = mongoose.model<IUser>("user",UserSchema);


export default UserModel;