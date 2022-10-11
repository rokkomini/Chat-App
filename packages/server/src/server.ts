import express, { Application, json, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
const app: Application = express();
import chatRouter from "./controllers/chat";
import { setUpMongoDb } from "./models/common";
import userRouter from "./controllers/user";

dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT: number = parseInt(process.env.SERVER_PORT || "3001");
const MONGODB_URL: string =
  process.env.MONGO_URL || "mongodb://localhost:27017/chatt_app";

app.use("/chat", chatRouter);
app.use('/user', userRouter)

app.listen(PORT, async function () {
  await setUpMongoDb(MONGODB_URL);
  console.log(
    `App is listening on port ${PORT} and testing mongo db url ${MONGODB_URL}!`
  );
});
