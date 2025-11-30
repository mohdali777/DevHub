import { injectable } from "tsyringe";
import BaseRepo from "../../../core/BaseClass/BaseRepo/implimnatation";
import { USER_DTO_DB, USER_DTO_REQ, USER_DTO_RES } from "../DTO";
import UserModel from "../Model/implimantations";
import { IUserRepo } from "./interface";
import AppError from "../../../core/Error/Error";

@injectable()
export default class UserRepo extends BaseRepo<USER_DTO_DB> implements IUserRepo{
constructor(){
super(UserModel)
}

async FindOne(Filter: Partial<USER_DTO_REQ>): Promise<USER_DTO_RES|null> {
try {
const Data = await UserModel.findOne(Filter).lean()
if(!Data) return null
return{
_id: Data._id.toString(),
name: Data.name,
email: Data.email,
image:Data.image,
saved_articles:Data.saved_articles,
is_verified: Data.is_verified,
badge: Data.badge,
password: Data.password,
googleid: Data.googleid,
role: Data.role,  
status:Data.status
}   
} catch (error) {
console.log(error);
throw new AppError("Error in Fetching User",500)
}
}

async  FindMany(Filter: Partial<USER_DTO_DB>): Promise<USER_DTO_RES[]|null> {
try {
const Data = await UserModel.find(Filter).lean()
if(!Data) return null
return Data.map((item)=>({
_id: item._id.toString(),
name: item.name,
email: item.email,
image:item.image,
saved_articles:item.saved_articles,
is_verified: item.is_verified,
badge: item.badge,
password: item.password,
googleid: item.googleid,
role: item.role, 
status:item.status
}))
} catch (error) {
console.log(error);
throw new AppError("Error in Fetching Users",500)
}
}

}