import "reflect-metadata"
import "./core/conatiner/container"
import setupApp from "./core/app"
import ENV from "./core/config/env";

const app = setupApp()

app.listen(ENV.PORT, () => {
  console.log(`Server is running on port ${ENV.PORT}`);
});

