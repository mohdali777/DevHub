export interface USER_DTO_REQ{
name:string,
email:string,
image?:{
image_url:string|File,
public_id:string|null
} 
password:string,
googleid:string|null,
role:"admin"|"user"|"author",
is_verified:boolean,
badge:"none"|"blue"|"silver"|"gold"|"red",
bio:string,
}

export interface USER_DTO_RES{
_id:string
name:string,
email:string,
image:{
image_url:string,
public_id:string
} 
password:string,
googleid:string|null,
role:"admin"|"user"|"author",
is_verified:boolean,
badge:"none"|"blue"|"silver"|"gold"|"red",
saved_articles:string[],
bio:string,
}

export interface USER_DTO_DB{
name:string,
email:string,
image:{
image_url:string,
public_id:string
} 
password:string,
googleid:string|null,
role:"admin"|"user"|"author",
is_verified:boolean,
badge:"none"|"blue"|"silver"|"gold"|"red",
saved_articles:string[],
bio:string,
}
