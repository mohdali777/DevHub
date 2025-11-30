import mongoose from "mongoose"

export interface IContentBlock{
heading:string,
text:string
list:string[],
links:{
    url:string,
    caption:string
},
images:{
    image:{
        image_url:string,
        public_id:string
    },
    caption:string
}[],
sort_order:number
}


export interface ISubArticle{
article_id:mongoose.Schema.Types.ObjectId,
title:string,
content_blocks:IContentBlock[],
sort_order:number
}