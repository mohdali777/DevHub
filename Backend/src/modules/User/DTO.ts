export interface USER_DTO_REQ{
_id:string    
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
is_signup?:boolean
is_google_signup?:boolean
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
status:"active"|"blocked"|"inactive"
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
status:"active"|"blocked"|"inactive"
}
