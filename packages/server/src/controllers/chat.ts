import ChatItem from "@my-chat-app/shared";
import express, { Router, Request, Response } from "express";

const chatRouter = express.Router();

chatRouter.get("/", (req: Request, res: Response) => {
  res.json("Hello from router");
});

/* router.post('/chat', (req: Request, res: Response) => {

}) */

export default chatRouter