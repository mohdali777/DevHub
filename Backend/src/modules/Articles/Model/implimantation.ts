import mongoose from "mongoose";
import { IArticle } from "./Interface";

const ArticleSchema = new mongoose.Schema<IArticle>({
 title:{type:String,required:true},
 slug:{type:String,required:true,unique:true},
 cover_image:{image_url:{type:String,required:true},public_id:{type:String,required:true}},
 tags:{type:[String],default:[]},
 category:{type:mongoose.Schema.Types.ObjectId,required:true}, 
 author:{type:mongoose.Schema.Types.ObjectId,ref:"user",required:true},
 likes:[{type:mongoose.Schema.Types.ObjectId,ref:"user",default:[]}],
 likes_count:{type:Number,default:0},
 views_count:{type:Number,default:0},
 status:{type:String,enum:["published","draft","blocked","archived"],default:"draft"},
},{timestamps:true});     

const ArtcicleModel = mongoose.model<IArticle>("article",ArticleSchema);

export default ArtcicleModel;
