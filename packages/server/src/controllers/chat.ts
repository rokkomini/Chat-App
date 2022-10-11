import { ChatItem } from "@my-chat-app/shared";
import express, { Router, Request, Response } from "express";
import { loadChats, saveChat } from "../services/chat-service";

const chatRouter = express.Router();

chatRouter.get("/", async (req: Request, res: Response) => {
  try {
    res.status(200).send(await loadChats());
  } catch (error) {
    res.status(500).send("Something went went wrong");
  }
});

chatRouter.post(
  "/",
  async (req: Request<ChatItem>, res: Response<ChatItem[]>) => {
    try {
      res.send(await saveChat(req.body));
    } catch (e) {
      res.sendStatus(400);
    }
  }
);

export default chatRouter;
