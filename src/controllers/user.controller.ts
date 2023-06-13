import { Request , Response , NextFunction } from "express";

import userModel from "../models/user.model";
import userValidation from "../validations/user.validation";

class AuthController{
   
    async register(req:Request , res: Response , next:NextFunction){
        try {
            
            userValidation.validate(req.body);
            const {fullname,email,password} = req.body;
            const user = await userModel.findOne({email});
            if(user){
                throw res.status(401).json({
                    statusCode: 401,
                    message: "فردی قبلا با این ایمیل ثبت نام کرده است",
                });
            }
            await userModel.create({fullname,email,password});

            res.status(200).json({
                statusCode: 200,
                message: "ثبت نام با موفقیت انجام شد"
            });

        } catch (err) {
            next(err);
        }
    }
}
export default AuthController;