import express, { Application, json, Request, Response } from "express";
import cors from "cors";
import dotenv from 'dotenv'
import ChatItem from "@my-chat-app/shared";
const app: Application = express();
import chatRouter from './controllers/chat'
import { setUpMongoDb} from './models/chat-repository'

dotenv.config()

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}))

const PORT: number = parseInt(process.env.SERVER_PORT || '3001');
const MONGODB_URL: string = process.env.MONGO_URL || 'mongodb://localhost:27017/chatt_app'

app.use('/chat', chatRouter)
//app.use('/auth', require('./controllers/auth.ts'))

/* app.get("/hello", (req: Request, res: Response) => {
  res.send("Hello, World!");
});

app.get('/chat', (req: Request, res: Response<ChatItem>) => {
  res.send({
    id: '123',
    text: 'HELLOOO youu',
    timeStamp: new Date
  })
}) */

app.listen(PORT, async function () {
  await setUpMongoDb(MONGODB_URL)
  console.log(`App is listening on port ${PORT} and testing mongo db url ${MONGODB_URL}!`);
});
