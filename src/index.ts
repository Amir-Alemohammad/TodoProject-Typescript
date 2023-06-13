import Application from "./app";

new Application(Number(process.env.PORT),String(process.env.DB_URL));