export interface IUser{
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