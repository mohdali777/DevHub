import dotenv from "dotenv"
dotenv.config()

interface Env {
PORT:string,
MONGO_URI:string,
GOOGLE_CLIENT_ID:string,
ACCESS_TOKEN_SECRET:string,
REFRESH_TOKEN_SECRET:string
GOOGLE_CLIENT_SECRET:string
}

const ENV:Env = {
PORT:process.env.PORT as string,
MONGO_URI:process.env.MONGO_URI as string, 
GOOGLE_CLIENT_ID:process.env.GOOGLE_CLIENT_ID as string,
ACCESS_TOKEN_SECRET:process.env.ACCESS_TOKEN_SECRET as string,
REFRESH_TOKEN_SECRET:process.env.REFRESH_TOKEN_SECRET as string,
GOOGLE_CLIENT_SECRET:process.env.GOOGLE_CLIENT_SECRET as string
}

export default ENV