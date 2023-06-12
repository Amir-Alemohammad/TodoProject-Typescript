import Application from "./app";

new Application(Number(process.env.PORT),"mongoose://127.0.0.1:27017");