import express,{Application , ErrorRequestHandler , Request , Response } from "express"
import dotenv from "dotenv";
import mongoose from "mongoose";

import applicationRoute from "./routes/application.router";


dotenv.config({
    path: __dirname+"/config/config.env"
});
class App{
    
    private _app : Application

    constructor(private port:number,private db_url:string){
       
        this._app = express();
        this.ConfigApplication();
        this.ConfigDataBase();
        this.HandlerError();
    }
    ConfigApplication(){

        this._app.use(express.json());        
        this._app.use(applicationRoute)
        this._app.listen(this.port,()=>{
            console.log(`Server is Running on http://127.0.0.1:${this.port}`);
        });
    }
    ConfigDataBase(){
    
        const conn = mongoose.connect(this.db_url);
        conn.then((result)=>{
            console.log(`MongoDB Connected on: http:${result.connection.host}:${this.port}`);
        }).catch((err)=>{
            console.log(err);
            process.exit(1);
        });
    }
    HandlerError(){
        const errorHandler: ErrorRequestHandler = (error,req:Request,res:Response) => {
            const status = error?.statusCode || 500 
            const message = error?.message || "خطای سرور"
            res.status(status).json({
                status,
                message,
            }); 
        };
        this._app.use(errorHandler);
    }
}    

export default App;