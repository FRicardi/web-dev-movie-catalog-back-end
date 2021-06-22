import { Router } from "express";
import { CreateUser, GetUser } from "../interfaces/user";
import { userService } from "../services/users";

const authRouter = Router();

authRouter.post('/create', async (req, res) => {
    try {
        const userCredentials: CreateUser = {
            username: req.body.username,
            password: req.body.password
        };

        const createdUser = await userService.createUser(userCredentials);

        const token = userService.loginUser(createdUser[0]);

        return res.json({token});
    } catch(e) {
        console.log({e})
        res.status(500);
        res.send({error: e});
    }
});

authRouter.post('/', async (req, res) => {
    try {
        const userCredentials: CreateUser = {
            username: req.body.username,
            password: req.body.password
        };
        const user: GetUser = await userService.getUser(userCredentials) as GetUser;
        
        if (user) {
            const token = userService.loginUser(user.id);

            return res.json({token});
        } else {
            res.status(404);
            res.send({error: "User not found"});
        }
    } catch(e) {
        console.log({e})
        res.status(500);
        res.send({error: e});
    }
});

export { authRouter };