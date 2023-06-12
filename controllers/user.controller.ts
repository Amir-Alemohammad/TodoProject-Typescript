import { Request , Response , NextFunction } from "express";
class AuthController{
    constructor(){
        
    }
    register(req:Request , res: Response , next:NextFunction){
        const {fullName,email,password} = req.body;
    }
    login(){

    }
}
export default AuthController;