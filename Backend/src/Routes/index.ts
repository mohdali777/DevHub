import Express from "express";
import UserRoutes from "../modules/User/Routes"
import AuthRoutes from "../modules/Auth/Routes"
const Routes = Express.Router();

Routes.use("/user",UserRoutes)
Routes.use("/auth",AuthRoutes)

export default Routes