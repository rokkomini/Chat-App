//Connection to mongoDB and the its functions

import { ChatItem } from "@my-chat-app/shared";
import { model, Schema } from "mongoose";

const ChatSchema = new Schema(
  {
    author: String,
    text: String,
    timeStamp: Date,
  },
  { collection: "chat_messages" }
);

const ChatModel = model<ChatItem>("ChatItem", ChatSchema);

const loadAllChatMessages = async (): Promise<ChatItem[]> => {
  return await ChatModel.find({}).exec();
};

const saveChatMessage = async (chatItem: ChatItem): Promise<void> => {
  const newModel = new ChatModel(chatItem);
  newModel.save();
};

export { loadAllChatMessages, saveChatMessage };
