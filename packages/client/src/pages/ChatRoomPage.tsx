import React, { useEffect, useState } from "react";

export default function ChatRoomPage() {

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState(["Hello everybody", "How u doin?"]);

  const sendMessage = () => {
    console.log(`sending ${message}`)
  }

  return (
    <div className="container">
    <h1 className="header">Chat app</h1>
    <div>
      <div className="chat-container">
        <div className="message-list">
          {messages.map((msg) => {
            return (
              <div className="message-bubble">
                <p className="author">NAME</p>
                <p className="timestamp">WHEN</p>

                <p className="message-text" key={msg}>
                  {msg}
                </p>
              </div>
            );
          })}
        </div>
        <input
          className="message-input"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="send-button" onClick={sendMessage}>
          Send message
        </button>
      </div>
    </div>
  </div>
  )
}
