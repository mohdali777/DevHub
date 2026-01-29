export interface USER_DTO{
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
experience: {
position: string;
company: string;
starting_date: string;
ending_date: string;
employment_type: "full-time" | "part-time" | "contract" | "internship" | "freelance";
location: string;
duration:string
status:"working"|"not-working"|''
}[];
education: {
institution: string;
department: string;
start_year: string;
end_year: string;
duration:string
status:"studying"|"graduated"|''
}[];
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
createdAt:Date
}
