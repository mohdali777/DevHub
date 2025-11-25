import { inject, injectable } from "tsyringe";
import { IUserRepo } from "../Repo/interface";
import UserEntity from "../UserEntity";
import { USER_DTO_REQ, USER_DTO_RES } from "../DTO";
import { TokenManagement } from "../../../core/utils/TokenService";
import { BcryptManager } from "../../../core/utils/Passwordhashing";
import { ReturnPayload, TokenPayload } from "../../Auth/DTO";
import { IUserService } from "./interface";
import AppError from "../../../core/Error/Error";

@injectable()
export class UserService implements IUserService{
constructor(
@inject("userRepo") private userRepo:IUserRepo,
@inject("userEntity") private userEntity:UserEntity,
@inject("tokenService") private tokenService:TokenManagement,
){}

async Create(Data:Partial<USER_DTO_REQ>): Promise<string> {
try {
const ValidatedData = this.userEntity.Create(Data)
const IsEmail = await this.userRepo.FindOne({email:ValidatedData.email})
if(IsEmail) throw new AppError("Email already exists",409)
const hashPassword = await BcryptManager.passwordHashing(ValidatedData.password!)
ValidatedData.password = hashPassword  
const id = await this.userRepo.Create(ValidatedData)
return id
} catch (error) {
throw error
}
}

async Update(id:string,Data:Partial<USER_DTO_REQ>): Promise<string> {
try {
const isUser = await this.userRepo.FindOne({_id:id})
if(!isUser) throw new AppError("User not found",404)
const UpdatedData = this.userEntity.Update(Data)
await this.userRepo.Update(id,UpdatedData)
return "suiccess"
} catch (error) {
throw error
}
}

async FindOne(id:string): Promise<USER_DTO_RES | null> {
try {
const Filter:Partial<USER_DTO_REQ> = {}
if(id) Filter._id = id
return this.userRepo.FindOne(Filter)
} catch (error) {
throw error 
}
}

async FindMany(Filter:Partial<USER_DTO_REQ>): Promise<USER_DTO_RES[] | null> {
try {
const Filter:Partial<USER_DTO_REQ> = {}
const Data = this.userRepo.FindMany(Filter)
return Data
} catch (error) {
throw error    
}
}
}