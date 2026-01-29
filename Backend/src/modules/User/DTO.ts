import { IUser } from "./Model/Interface";
interface Experience {
position: string;
company: string;
starting_date: string;
ending_date: string;
employment_type: "full-time" | "part-time" | "contract" | "internship" | "freelance";
location: string;
duration:string
}

interface education{
institution: string;
department: string;
start_year: string;
end_year: string;
duration:string
}

export interface USER_DTO_REQ{
_id:string    
name:string,
email:string,
image:{
image_url:string,
public_id:string
} 
about:{
user_type: "employee" | "student"; 
location: string;
bio: string;
website: string;
company: string;
position: string;
skills:string[];
experience:Experience[];
education:education[];
social: {
github: string;
linkedin: string;
x: string;
portfolio: string;
dribbble: string;
behance: string;
};
}
stats:{
saved_articles:string[],
posts:string[],
comments:string[],
followers:string[],
following:string[]
likes:string[]
}
password:string,
googleid:string|null,
role:"admin"|"user"|"author",
is_verified:boolean,
badge:"none"|"blue"|"silver"|"gold"|"red",
status:"active"|"blocked"|"inactive"
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
about: {
user_type: "employee" | "student"; 
location: string;
bio: string;
website: string;
company: string;
position: string;
skills:string[];
experience:Experience[];
education:education[];
social: {
github: string;
linkedin: string;
x: string;
portfolio: string;
dribbble: string;
behance: string;
};
}
role:"admin"|"user"|"author",
is_verified:boolean,
badge:"none"|"blue"|"silver"|"gold"|"red",
stats:{
saved_articles:string[],
posts:string[],
comments:string[],
followers:string[],
following:string[]
likes:string[]
},
status:"active"|"blocked"|"inactive",
createdAt?:Date,
}

export interface USER_DTO_DB{
name:string,
email:string,
image:{
image_url:string,
public_id:string
} 
about?: {
user_type: "employee" | "student"; 
location: string;
bio: string;
website: string;
company: string;
position: string;
skills:string[];
experience:Experience[];
education:education[];
social: {
github: string;
linkedin: string;
x: string;
portfolio: string;
dribbble: string;
behance: string;
};
};
stats?:{
saved_articles:string[],
posts:string[],
comments:string[],
followers:string[],
following:string[]
likes:string[]
}
password:string,
googleid:string|null,
role:"admin"|"user"|"author",
is_verified:boolean,
badge:"none"|"blue"|"silver"|"gold"|"red",
status:"active"|"blocked"|"inactive"
}
export interface USER_DTO_AUTH extends IUser{
_id:string
}

