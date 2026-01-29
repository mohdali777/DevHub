import { ReturnPayload } from "../../Auth/DTO";
import { USER_DTO_REQ, USER_DTO_RES } from "../DTO";
export interface IUserService{
Create(Data:Partial<USER_DTO_REQ>):Promise<string>
Update(id:string,Data:Partial<USER_DTO_REQ>):Promise<string>
FindById(id:string):Promise<USER_DTO_RES|null>
FindMany(Filter:Partial<USER_DTO_REQ>):Promise<USER_DTO_RES[]|null>
}