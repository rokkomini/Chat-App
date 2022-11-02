import { UserItem } from "@my-chat-app/shared";
import express, { Request, Response } from "express";
import { resolve } from "path";
import { loadUserByUsername } from "../models/user-repository";
import authenticateToken, { JwtRequest } from "../services/auth-service";
import { loginUser } from "../services/login-service";
import { saveUser } from "../services/register-service";

const userRouter = express.Router();

userRouter.get(
  "/user",
  authenticateToken,
  async (req: JwtRequest<UserItem>, res: Response) => {
    console.log("get user", req.jwt);
    try {
      const user = await loadUserByUsername(req.jwt?.username as string);
      if (user) {
        res.status(200).send(user);
      }
    } catch (error) {
      res.status(500).send(error);
    }
  }
);

userRouter.post(
  "/register",
  async (req: Request<UserItem>, res: Response<UserItem | any>) => {
    console.log("server create user req body:", req.body);
    try {
      res.status(201).send(await saveUser(req.body));
    } catch (e) {
      res.status(400).send("Error when registering user");
    }
  }
);

userRouter.post("/login", async (req: Request, res: Response) => {
  console.log("server login req body:", req.body);
  try {
    const foundUser = await loginUser(req.body);
    res.status(202).send(foundUser);
  } catch {
    res.status(401).send("Wrong username or password");
  }
});

export default userRouter;
