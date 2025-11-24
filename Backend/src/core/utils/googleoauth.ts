import { OAuth2Client } from "google-auth-library";
import ENV from "../config/env";
import AppError from "../Error/Error";

const client = new OAuth2Client(ENV.GOOGLE_CLIENT_ID)

export default class GoogleAuthClient{
static async VerifyToken(token:string){
try {
const Ticket =  await client.verifyIdToken({
idToken:token,
audience:ENV.GOOGLE_CLIENT_ID
})
return Ticket.getPayload()
} catch (error:any) {
console.error("❌ Google Verification Error:", error.message || error);
throw new AppError("Google Login Failed",500)   
}

}
}