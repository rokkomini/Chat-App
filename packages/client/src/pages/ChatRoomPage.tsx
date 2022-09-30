import axios from "axios";
import React, { useEffect, useState } from "react";
import ChatItem from "@my-chat-app/shared";

export default function ChatRoomPage() {
  const [username, setUsername] = useState<string>('')
  const [messages, setMessages] = useState<ChatItem | undefined>();

  const sendMessage = () => {
    console.log(`sending ${messages}`);
  };

/*   const fetchMessages = async (): Promise<ChatItem[]> => {
    const response = await axios.get<ChatItem[]>([])
  }
 */
  axios.defaults.baseURL = process.env.REACT_APP_CHAT_API || "http://localhost:3001";
  const fetchChat = async (): Promise<ChatItem> => {
    const response = await axios.get<ChatItem>("/chat");
    return response.data;
  };

  useEffect(() => {
    fetchChat().then(setMessages);
  }, []);

  return (
    <div className="container">
      <h1 className="header">Chat app</h1>
      <label htmlFor="">Please type your name </label>
      <input className="nameInput" placeholder="your name" onChange={e => setUsername(e.target.value)}/>
      <button>Thats my name</button>
      <div>
        <div className="chat-container">
          <div className="message-list">
            {messages ? (
               <div className="message-bubble">
               <p className="author">NAME</p>
               <p className="timestamp">{(messages.timeStamp).toString()}</p>
               <p className="message-text">
                 {messages.text}
               </p>
             </div>
            ) : (
              <h4>No messages to show</h4>
            )}
           
          </div>
          <input className="message-input" />
          <button className="send-button" onClick={sendMessage}>
            Send message
          </button>
        </div>
      </div>
    </div>
  );
}
