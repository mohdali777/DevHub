import  Express  from "express";
import { container } from "tsyringe";
import AuthControllers from "./controller";
const Router = Express.Router();

const Auth = container.resolve(AuthControllers)

Router.post("/login",Auth.Login)
Router.post("/googlelogin",Auth.GoogleAuth)
Router.post("/signup",Auth.signup)
Router.get("/GenarateAccess",Auth.GenarateAccess)
Router.get("/verifyuser",Auth.VerifyUser)

export default Router;
