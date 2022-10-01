import ChatItem from "@my-chat-app/shared";
import { loadAllChatMessages, saveChatMessage } from "../models/chat-repository";

const saveChat = async (chatItem: ChatItem): Promise<ChatItem[]> => {
    if (!chatItem.text || chatItem.text == '') {
        throw new Error('Nothing written')
    }

    chatItem.timeStamp = new Date()

    await saveChatMessage(chatItem)

    return loadAllChatMessages()
}

const loadChats = async (): Promise<ChatItem[]> => {
    return await loadAllChatMessages()
}


export {saveChat, loadChats}