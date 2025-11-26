import Express from "express";
import UserRoutes from "../modules/User/Routes"
import AuthRoutes from "../modules/Auth/Routes"
import { container } from "tsyringe";
import UserValidationMiddleware from "../core/Middleware/UserValidation";
const Routes = Express.Router();
const Check = container.resolve(UserValidationMiddleware)
Routes.use("/auth",AuthRoutes)

Routes.use(Check.UserCheck)

Routes.use("/user",UserRoutes)


export default Routes