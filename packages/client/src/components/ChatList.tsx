import { ChatItem } from "@my-chat-app/shared";
import moment from "moment";
import React from "react";

export default function ChatList(props: {chatItem: ChatItem, currentAuthor: string}) {
  const MessageInfo = (chatItem: ChatItem) => {
    return (
      <div>
        <p className="author">{chatItem.author}</p>
        <p className="timestamp">{moment(chatItem.timeStamp).format('MMMM Do YYYY, h:mm:ss a').toString()}</p>
        <p className="message-text">{chatItem.text}</p>
      </div>
    );
  };

  const MessageList = ({
    chatItem,
    currentAuthor,
  }: {
    chatItem: ChatItem;
    currentAuthor: string;
  }) => {
    if (chatItem.author === currentAuthor) {
      return (
        <div className="my-msg-bubble">
          <MessageInfo
            author={chatItem.author}
            timeStamp={chatItem.timeStamp}
            text={chatItem.text}
          />
        </div>
      );
    } else {
      return (
        <div className="other-msg-bubble">
          <MessageInfo
            author={chatItem.author}
            timeStamp={chatItem.timeStamp}
            text={chatItem.text}
          />
        </div>
      );
    }
  };

  return (
    <div>
      <MessageList chatItem={props.chatItem} currentAuthor={props.currentAuthor}/>
    </div>
  );
}
