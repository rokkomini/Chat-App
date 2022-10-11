//Connection to mongoDB and the its functions

import { ChatItem } from "@my-chat-app/shared";
import { connect, model, Schema } from "mongoose";

const ChatSchema = new Schema(
  {
    author: String,
    text: String,
    timeStamp: Date,
  },
  { collection: "chat_messages" }
);

//Talar om att modellen följer typen av Interfacet ChatItem
const ChatModel = model<ChatItem>("ChatItem", ChatSchema);

//Ska returnera en array, async funktioner måste returnera en promise,
// för typescript behöver den returnera en promise av specifik typ.
const loadAllChatMessages = async (): Promise<ChatItem[]> => {
  return await ChatModel.find({}).exec();
};

// I Mongo databasen sparas modeller som följer ett schema
// Modellen i sin tur följer interfacet
const saveChatMessage = async (chatItem: ChatItem): Promise<void> => {
  const newModel = new ChatModel(chatItem);
  newModel.save();
};

export { loadAllChatMessages, saveChatMessage };
