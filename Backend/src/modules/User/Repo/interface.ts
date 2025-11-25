import BaseRepo from "../../../core/BaseClass/BaseRepo/implimnatation";
import { USER_DTO_DB, USER_DTO_REQ, USER_DTO_RES } from "../DTO";

export interface IUserRepo extends BaseRepo<USER_DTO_DB>{
FindOne(Filter:Partial<USER_DTO_REQ>):Promise<USER_DTO_RES|null>
FindMany(Filter:Partial<USER_DTO_REQ>):Promise<USER_DTO_RES[]|null>
}