export interface Article{
title:string,
slug:string,
cover_image:{
image_url:string,
public_id:string
},
tags:string[],
category:string,
author:string,
likes:string[],
views:string[],
likes_count:number,
views_count:number,
status:"published"|"draft"|"blocked"|"archived",
}