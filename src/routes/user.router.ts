import { Router } from "express";

const router: Router = Router();

router.get("/register",(req,res,next)=>{
    res.send("salam")
});

const userRouter:Router = router;

export default userRouter;
