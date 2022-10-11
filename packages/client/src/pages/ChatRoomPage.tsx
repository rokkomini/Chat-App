import axios from "axios";
import React, { useEffect, useState } from "react";
import { Input } from "@chakra-ui/react";
import { ChatItem } from "@my-chat-app/shared"

export default function ChatRoomPage() {
  const [author, setAuthor] = useState<string>("");
  const [messages, setMessages] = useState<ChatItem[]>([]);
  const [messageText, setMessageText] = useState<string>("");
  const [error, setError] = useState<string | undefined>();
  const [displayAuthor, setDisplayAuthor] = useState<boolean>(false);

  axios.defaults.baseURL =
    process.env.REACT_APP_CHAT_API || "http://localhost:3001";

  function addAuthor(author: string) {
    setAuthor(author);
    setDisplayAuthor(true);
  }

  function removeAuthor() {
    setAuthor("");
    setDisplayAuthor(false);
  }

  async function fetchChat() {
    const response = await axios.get<ChatItem[]>("/chat");
    console.log("fetch data", response.data);
    setMessages(response.data);
  }

  useEffect(() => {
    fetchChat();
  }, []);

  async function sendMessage(
    author: string,
    messageText: string
  ): Promise<void> {
    const chatItem: ChatItem = {
      author: author,
      text: messageText,
      timeStamp: new Date(),
    };

    try {
      await axios.post("/chat", chatItem);
      fetchChat();
    } catch (err) {
      if (author === "") {
        setError("Please enter your name");
      } else setError("Something went wrong fetching messages");
    } finally {
      setMessageText("");
    }
  }

  return (
    <div className="container">
      <h1 className="header">Chat app</h1>
      {error ? <h2>{error}</h2> : null}
      {displayAuthor ? (
        <div>
          <h2>Welcome {author}</h2>
          <p>New user?</p>{" "}
          <button onClick={(e) => removeAuthor()}>Click to change name</button>
        </div>
      ) : (
        <div>
          <label htmlFor="">Please type your name </label>
          <input
            className="nameInput"
            placeholder="your name"
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <button onClick={(e) => addAuthor(author)}>Thats my name</button>
        </div>
      )}

      <div>
        <div className="chat-container">
          <div className="message-list">
            {messages.length > 0 ? (
              messages &&
              messages.map((message) => (
                <div className="message-bubble" key={message._id}>
                  <p className="author">{message.author}</p>
                  <p className="timestamp">{message.timeStamp.toString()}</p>
                  <p className="message-text">{message.text}</p>
                </div>
              ))
            ) : (
              <h4>No messages to show</h4>
            )}
          </div>
          <Input
            className="message-input"
            type="text"
            variant="outline"
            placeholder="Type your message here"
            value={messageText}
            onChange={(e: any) => setMessageText(e.target.value)}
          />
          <button
            className="send-button"
            onClick={(e) => sendMessage(author, messageText)}
          >
            Send message
          </button>
        </div>
      </div>
    </div>
  );
}
