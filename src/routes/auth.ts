import { Router } from "express";
import { userService } from "../services/users";

const authRouter = Router();

authRouter.get('/', async (req, res) => {
    return await userService.getUser({username: 'test', password: 'pass'});
});

export { authRouter };