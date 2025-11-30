import mongoose from "mongoose";
import { IContentBlock } from "./interface";

const ContentBlockSchema = new mongoose.Schema<IContentBlock>({
heading:{type:String,required:true},    
text:{type:String,required:true},
list:{type:[String],default:[]},
links:[{url:{type:String},caption:{type:String}}],
images:[{
image:{
image_url:{type:String,required:true},
public_id:{type:String,required:true}
},
caption:{type:String,default:""}
}],
sort_order:{type:Number,required:true}
},{_id:true});

const SubArticleSchema = new mongoose.Schema({
article_id:{type:mongoose.Schema.Types.ObjectId,ref:"article",required:true},
title:{type:String,required:true},
content_blocks:{type:[ContentBlockSchema],default:[]},
sort_order:{type:Number,required:true}
},{timestamps:true});

const SubArticleModel = mongoose.model("sub_article",SubArticleSchema);

export default SubArticleModel;