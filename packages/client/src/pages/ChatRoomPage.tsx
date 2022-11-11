import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Input } from '@chakra-ui/react';
import { ChatItem } from '@my-chat-app/shared';
import Navbar from '../components/Navbar';
import ChatList from '../components/ChatList';
import { useNavigate } from 'react-router-dom';

export default function ChatRoomPage() {
  const [author, setAuthor] = useState<string>('');
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [messages, setMessages] = useState<ChatItem[]>([]);
  const [messageText, setMessageText] = useState<string>('');
  const [error, setError] = useState<string | undefined>();

  axios.defaults.baseURL =
    process.env.REACT_APP_CHAT_API || 'http://localhost:3001';
  const token = localStorage.getItem('jwt');
  const navigate = useNavigate();

  const fetchChat = async () => {
    const response = await axios.get<ChatItem[]>('/chat');
    return response.data;
    // setMessages(response.data);
  };

  const getUser = () => {
    axios
      .get('/user/getuser', {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setAuthor(response.data);
        setIsLoggedIn(true);
      })
      .catch((error) => {
        navigate('/');
        setIsLoggedIn(false);
      });
  };

  useEffect(() => {
    getUser();
    const interval = setInterval(() => {
      fetchChat()
        .then(setMessages)
        .catch((error) => {
          setMessages([]);
          setError(error.message);
        });
    }, 1000);
    return () => clearInterval(interval);
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
      await axios.post('/chat', chatItem);
      fetchChat();
    } catch {
      setError(error);
    } finally {
      setMessageText('');
    }
  }

  return (
    <div>
      {!author ? null : <Navbar username={author} />}

      <div className="container">
        <h1 className="header">Get chattin</h1>

        <div>
          <div className="chat-container">
            <div className="message-list">
              {messages.length > 0 ? (
                messages &&
                messages.map((message) => (
                  <ChatList currentAuthor={author} chatItem={message} />
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
    </div>
  );
}
