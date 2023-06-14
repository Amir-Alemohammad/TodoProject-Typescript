import {Router} from "express"

import userRouter from "./user.router";

import todoRouter from "./todo.router";

const router: Router = Router();


router.use("/user",userRouter);

router.use("/todo",todoRouter);



const applicationRoute: Router = router;

export default applicationRoute;