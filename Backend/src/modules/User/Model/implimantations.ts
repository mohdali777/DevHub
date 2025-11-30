import mongoose from "mongoose";
import { IUser } from "./Interface";

const UserSchema = new mongoose.Schema<IUser>(
{
name: { type: String, required: true },
email: { type: String, required: true, unique: true },
image: {
image_url: { type: String },
public_id: { type: String },
},
about: {
user_type: { type: String, enum: ["employee", "student",""],default:""},
location: { type: String, default: "" },
bio: { type: String, default: "" },
website: { type: String, default: "" },
company: { type: String, default: "" },
position: { type: String, default: "" },
skills: [{ type: String, default: [] }],
experience: [
{
position: { type: String,default: ""},
company: { type: String,default: ""},
starting_date: { type: String,default: ""},
ending_date: { type: String,default: ""},
employment_type: {
type: String,
enum: [
"full-time",
"part-time",
"contract",
"internship",
"freelance",
""
],
default:""
},
location: { type: String, default:""},
},
],

education: [
{
institution: { type: String, default:""},
department: { type: String, default:""},
start_year: { type: String, default:""},
end_year: { type: String, default:""},
},
],
student_details: {
university: { type: String, default: "" },
course: { type: String, default: "" },
current_year: { type: String, default: "" },
starting_date: { type: String, default: "" },
ending_date: { type: String, default: "" },
},
social: {
github: { type: String, default: "" },
linkedin: { type: String, default: "" },
twitter: { type: String, default: "" },
portfolio: { type: String, default: "" },
dribbble: { type: String, default: "" },
behance: { type: String, default: "" },
},
},
password: { type: String, required: true },
googleid: { type: String, default: null },
role: {
type: String,
enum: ["admin", "user", "author"],
default: "user",
},
is_verified: { type: Boolean, default: false },
badge: {
type: String,
enum: ["none", "blue", "silver", "gold", "red"],
default: "none",
},
saved_articles: [
{ type: mongoose.Schema.Types.ObjectId, ref: "article", default: [] },
],
status: {
type: String,
enum: ["active", "blocked", "inactive"],
default: "active",
},
},
{ timestamps: true }
);

const UserModel = mongoose.model<IUser>("user", UserSchema);

export default UserModel;
