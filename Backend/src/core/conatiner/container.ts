import { container } from "tsyringe";
import { IUserRepo } from "../../modules/User/Repo/interface";
import UserRepo from "../../modules/User/Repo/implimantation";
import { IUserService } from "../../modules/User/Services/interface";
import { UserService } from "../../modules/User/Services/implimantations";
import UserEntity from "../../modules/User/UserEntity";
import { TokenManagement } from "../utils/TokenService";
import { IAuthService } from "../../modules/Auth/Service/interface";
import AuthService from "../../modules/Auth/Service/implimantation";

//utils
container.registerSingleton('tokenService',TokenManagement)


//User Module
container.registerSingleton<IUserRepo>('userRepo',UserRepo)
container.registerSingleton<IUserService>('userService',UserService)
container.registerSingleton('userEntity',UserEntity)

//Auth Module
container.registerSingleton<IAuthService>('authService',AuthService)

export default container;