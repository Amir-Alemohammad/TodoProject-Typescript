import {Router , Request , Response , NextFunction} from "express"
import userRouter from "./user.router";

const router: Router = Router();


router.use("/user",userRouter);



const applicationRoute: Router = router;

export default applicationRoute;