import cors from "cors";
import Express from "express";
import cookieparser from "cookie-parser";
const app = Express();

export default function setupApp() {
app.use(cors({origin: "*"}));
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));
app.use(cookieparser())
return app;
}


