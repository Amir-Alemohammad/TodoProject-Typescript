import { Router } from "express";

import AuthController from "../controllers/user.controller";


const router: Router = Router();

const auth = new AuthController;

router.post("/register",auth.register);

router.post("/login",auth.login);

const userRouter:Router = router;

export default userRouter;
