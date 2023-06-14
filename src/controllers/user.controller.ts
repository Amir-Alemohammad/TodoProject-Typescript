import { Request , Response , NextFunction } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

import userModel from "../models/user.model";
import userValidation from "../validations/user.validation";

class AuthController{
   
    async register(req:Request , res: Response , next:NextFunction){
        try {
            
            await userValidation.validate(req.body);

            const {fullname,email,password} = req.body;
            const user = await userModel.findOne({email});
            if(user){
                throw res.status(401).json({
                    statusCode: 401,
                    message: "فردی قبلا با این ایمیل ثبت نام کرده است",
                });
            }
            await userModel.create({fullname,email,password});
            
            res.status(201).json({
                statusCode: 201,
                message: "ثبت نام با موفقیت انجام شد"
            });

        } catch (err) {
            next(err);
        }
    }
    async login(req:Request,res:Response,next:NextFunction){
            try {
                const {email,password} = req.body;
                const user = await userModel.findOne({email});
                if(!user){
                    throw res.status(404).json({
                        message: "فردی با این مشخصات ثبت نشده است",
                        statusCode: 404,
                    });
                }
                const isEqaul = await bcrypt.compare(password,user.password);
                if(isEqaul){
                    const token = jwt.sign({
                        userId: user._id.toString(),
                    },String(process.env.SECRET_KEY));
                    res.status(200).json({
                        token,
                        userId: user._id.toString(),
                    });
                }else{
                    res.status(400).json({
                        statusCode: 404,
                        message: "ایمیل یا کلمه عبور اشتباه است"
                    });
                }
            } catch (err) {
                next(err);
            }
    }
    
}
export default AuthController;