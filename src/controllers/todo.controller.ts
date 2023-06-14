import { NextFunction , Request , Response } from "express";

import todoValidation from "../validations/todo.validation";
import todoModel from "../models/todo.model";
import { CustomRequest, customDecoded } from "../utils/interfaces/user.interface";

class todoController{
    async createTodo(req:Request, res:Response, next:NextFunction){
        try {
            await todoValidation.validate(req.body);
            const {text} = req.body;

            const user = (req as CustomRequest).token as customDecoded;
            const userId = user.userId;
            if(!userId){
                res.status(401).json({
                    message: "لطفا وارد حساب کاربری خود شوید",
                    statusCode: 401,
                });
            }
            await todoModel.create({
                text,
                user: userId,
            });

            res.status(201).json({
                message:"پست با موفقیت ساخته شد",
                statusCode: 201,
            });


        } catch (err) {
            next(err);
        }
        
    }
}
export default todoController;