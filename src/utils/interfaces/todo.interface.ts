import { Types } from "mongoose";

interface Todo{
    text:string;
    user: Types.ObjectId;
}
export default Todo;