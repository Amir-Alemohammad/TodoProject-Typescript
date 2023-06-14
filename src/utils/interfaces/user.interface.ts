import { Request } from "express";
import { JwtPayload } from "jsonwebtoken";

export interface User{
    fullname: string;
    email: string;
    password: string;
}
export interface CustomRequest extends Request {
    token: string | JwtPayload;
}
export interface customDecoded{
    userId: string;
    iat: number
}