import mongoose, { Schema } from "mongoose";

import Todo from "../utils/interfaces/todo.interface"

const todoSchema = new Schema<Todo>({
    text:{
        type : String,
        required : true,
        trim : true,
        minlength : 3,
        max : 255,
    }
},{timestamps:true});

const todoModel = mongoose.model("todoModel",todoSchema);

export default todoModel;