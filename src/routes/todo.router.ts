import {Router} from "express";

import todoController from "../controllers/todo.controller";

import {auth} from "../utils/auth"

const router: Router = Router();

const todo = new todoController;

router.post("/create-todo",auth,todo.createTodo);

const todoRouter: Router = router;

export default todoRouter;