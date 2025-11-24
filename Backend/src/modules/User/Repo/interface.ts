import BaseRepo from "../../../core/BaseClass/BaseRepo/implimnatation";
import { USER_DTO_DB, USER_DTO_REQ } from "../DTO";

export interface IUserRepo extends BaseRepo<USER_DTO_DB>{
FindOne(Filter:Partial<USER_DTO_REQ>):Promise<USER_DTO_DB>
FindMany(Filter:Partial<USER_DTO_DB>):Promise<USER_DTO_DB[]>
}