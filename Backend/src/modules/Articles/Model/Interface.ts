import mongoose from "mongoose";

export interface IArticle{
    title:string,
    slug:string,
    cover_image:{
        image_url:string,
        public_id:string
    },
    tags:string[],
    category:string|mongoose.Schema.Types.ObjectId,
    author:string|mongoose.Schema.Types.ObjectId,
    likes:string|mongoose.Schema.Types.ObjectId[],
    likes_count:number,
    views_count:number,
    status:"published"|"draft"|"blocked"|"archived",
}