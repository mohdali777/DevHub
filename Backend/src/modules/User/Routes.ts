import  Express  from "express";
import { container } from "tsyringe";
import UserControllers from "./Controllers";

const Routes = Express.Router();
const User = container.resolve(UserControllers)
Routes.post("/register",User.Create)
Routes.get("/:id",User.FindById)
export default Routes