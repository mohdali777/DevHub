export interface IUser{
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
}[];
education: {
institution: string;
department: string;
start_year: string;
end_year: string;
}[];
student_details: {
university: string;
course: string;
current_year: string;
starting_date: string;
ending_date: string; 
};
social: {
github: string;
linkedin: string;
twitter: string;
portfolio: string;
dribbble: string;
behance: string;
};
};
password:string,
googleid:string|null,
role:"admin"|"user"|"author",
is_verified:boolean,
badge:"none"|"blue"|"silver"|"gold"|"red",
saved_articles:string[],
status:"active"|"blocked"|"inactive"
}