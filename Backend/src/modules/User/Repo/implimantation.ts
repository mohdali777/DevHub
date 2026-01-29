import { injectable } from "tsyringe";
import BaseRepo from "../../../core/BaseClass/BaseRepo/implimnatation";
import { USER_DTO_AUTH, USER_DTO_DB, USER_DTO_REQ, USER_DTO_RES } from "../DTO";
import UserModel from "../Model/implimantations";
import { IUserRepo } from "./interface";
import AppError from "../../../core/Error/Error";

@injectable()
export default class UserRepo extends BaseRepo<USER_DTO_DB> implements IUserRepo{
constructor(){
super(UserModel)
}

private _mapToDTO(data: any): USER_DTO_RES {
return {
_id: data._id.toString(),
name: data.name,
email: data.email,
image: data.image,
about: data.about,
role: data.role,
badge: data.badge,
stats: data.stats,
is_verified: data.is_verified,
status: data.status,
createdAt: data.createdAt
};
}
async FindOne(
filter: Partial<USER_DTO_REQ>
): Promise<USER_DTO_RES | null> {
try {
const data = await UserModel.findOne(filter).lean();
if (!data) return null;
return this._mapToDTO(data);
} catch (error) {
console.log(error);
throw new AppError("Error in Fetching User", 500);
}
}


async  FindMany(Filter: Partial<USER_DTO_DB>): Promise<USER_DTO_RES[]|null> {
try {
const Data = await UserModel.find(Filter).lean()
if(!Data) return null
return Data.map(item => this._mapToDTO(item)) 
} catch (error) {
console.log(error);
throw new AppError("Error in Fetching Users",500)
}
}


async FindOneAuth(
filter: Partial<USER_DTO_REQ>
): Promise<USER_DTO_AUTH | null> {
try {
const data = await UserModel.findOne(filter).lean();
if (!data) return null;
return {...this._mapToDTO(data), password: data.password, googleid:data.googleid} as USER_DTO_AUTH;
} catch (error) {
console.log(error);
throw new AppError("Error in Fetching User", 500);
}
}


}