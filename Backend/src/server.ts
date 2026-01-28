import "reflect-metadata"
import "./core/conatiner/container"
import setupApp from "./core/app"
import ENV from "./core/config/env";
import connectDB from "./core/DB/connection";

async function StartServer() {
try {
await connectDB()
const app = setupApp()
app.listen(ENV.PORT, () => {
console.log(`Server is running on port ${ENV.PORT}`);
});
} catch (error) {
console.error("Error starting server:", error);
process.exit(1);
}
}

StartServer();


