import { USER_DTO_REQ, USER_DTO_RES } from "../DTO";

export interface IUserService{
Create(Data:Partial<USER_DTO_REQ>):Promise<string>
Update(Data:Partial<USER_DTO_REQ>):Promise<string>
}