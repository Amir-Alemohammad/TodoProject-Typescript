import mongoose, {Schema} from "mongoose";
import bcrypt from "bcryptjs";


import {User} from "../utils/interfaces/user.interface";



const userSchema = new Schema<User>({
    fullname:{
        type: String,
        required: true,
        minlength: 3,
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
        minlength: 4,
    },
    
},{timestamps:true});

userSchema.pre("save",function(next){
    let user = this;
    if(!user.isModified("password")) return next();
    bcrypt.hash(user.password,10,(err,hash) => {
        if(err) return next(err);
        user.password = hash;
        next();
    })
});

const userModel = mongoose.model<User>("userModel",userSchema);

export default userModel;