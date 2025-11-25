import { OAuth2Client } from "google-auth-library";
import ENV from "../config/env";
import AppError from "../Error/Error";

const client = new OAuth2Client(
{
client_id:ENV.GOOGLE_CLIENT_ID,
client_secret:ENV.GOOGLE_CLIENT_SECRET,
redirectUri: "postmessage"
}
)

export default class GoogleAuthClient{
static async VerifyToken(code:string){
try {
const { tokens } = await client.getToken(code);
if (!tokens.id_token) {
throw new Error("No ID token returned from Google");
}
const Ticket =  await client.verifyIdToken({
idToken:tokens.id_token,
audience:ENV.GOOGLE_CLIENT_ID
})
return Ticket.getPayload()
} catch (error:any) {
console.error("❌ Google Verification Error:", error.message || error);
throw new AppError("Google Login Failed",500)   
}

}
}