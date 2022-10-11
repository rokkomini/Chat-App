import { UserItem } from "@my-chat-app/shared";
import express, { Request, Response } from "express";
import { saveUser } from "../services/register-service";

const userRouter = express.Router();

userRouter.get("/", async (req: Request, res: Response) => {
  res.send("Getting user");
});

userRouter.post(
  "/register",
  async (req: Request<UserItem>, res: Response<UserItem | void>) => {
    try {
      res.status(201).send(await saveUser(req.body));
    } catch (e) {
      res.sendStatus(400);
    }
  }
);

userRouter.post("/login", async (req: Request<UserItem>, res: Response) => {
  res.send("Login user");
});

export default userRouter;
