import jwt, { Secret} from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { CustomRequest } from './interfaces/user.interface';

const SECRET_KEY: Secret = String(process.env.SECRET_KEY);


export const auth = (req: Request, res: Response, next: NextFunction) => {
 
   const authHeader = req.get('Authorization');
   
   if(!authHeader){
    throw res.status(401).json({
        message: "لطفا وارد اکانت کاربری خود شوید",
        statusCode : 401,
    })
   } 

   const token = req.header('Authorization')?.replace('Bearer ', '');
   if (!token) {
     throw new Error("Invalid Token");
   }
   const decoded = jwt.verify(token, SECRET_KEY);
   (req as CustomRequest).token = decoded;
  next();
};