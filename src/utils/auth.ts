import jwt, { Secret} from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { CustomRequest } from './interfaces/user.interface';

const SECRET_KEY: Secret = String(process.env.SECRET_KEY);


export const auth = (req: Request, res: Response, next: NextFunction) => {
 
   const authHeader = req.get('Authorization');
   if(!authHeader){
    throw new Error("auth header nist");
   } 
   const token = req.header('Authorization')?.replace('Bearer ', '');

   if (!token) {
     throw new Error("token nist");
   }

   const decoded = jwt.verify(token, SECRET_KEY);
   (req as CustomRequest).token = decoded;

};