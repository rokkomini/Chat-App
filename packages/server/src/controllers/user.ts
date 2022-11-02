import { UserItem } from "@my-chat-app/shared";
import express, { Request, Response } from "express";
import { loginUser } from "../services/login-service";
import { saveUser } from "../services/register-service";

const userRouter = express.Router();

userRouter.get("/", async (req: Request, res: Response) => {
  res.send("Getting user");
});

userRouter.post(
  "/register",
  async (req: Request<UserItem>, res: Response<UserItem | any>) => {
    console.log('server create user req body:', req.body);
    try {
      res.status(201).send(await saveUser(req.body));
    } catch (e) {
      res.status(400).send('Error when registering user');
    }
  }
);

userRouter.post("/login", async (req: Request, res: Response) => {
  console.log('server login req body:', req.body);
  try {
    const foundUser = await loginUser(req.body);
    res.status(202).send(foundUser)
  } catch {
    res.status(401).send("Wrong username or password");
  }
});

export default userRouter;
