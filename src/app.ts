import express,{Application} from "express"
import dotenv from "dotenv";

import applicationRoute from "./routes/application.router";


dotenv.config({
    path: __dirname+"/config/config.env"
});
class App{
    
    private _app:Application
    constructor(public port:number,public db_url:string){
       
        this._app = express();
        this.ConfigApplication();
    }
    ConfigApplication(){

        this._app.use(express.json());        
        this._app.use(applicationRoute)
    
        this._app.listen(this.port,()=>{
            console.log(`Server is Running on http://127.0.0.1:${this.port}`)
        });
    }
    ConfigDataBase(){
        
    }
}
export default App;