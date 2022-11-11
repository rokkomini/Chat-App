import { UserItem } from '@my-chat-app/shared';
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginRegisterForm from '../components/LoginRegisterForm';

export default function LoginUserPage() {
  const [user, setUser] = useState<UserItem>({ username: '', password: '' });
  const [error, setError] = useState<string>('');
  axios.defaults.baseURL =
    process.env.REACT_APP_BASE_URL || 'http://localhost:3001';

  const navigate = useNavigate();

  const handleOnLogin = async () => {
    await axios
      .post('/user/login', {
        username: user.username,
        password: user.password,
      })
      .then((response: any) => {
        const token = response.data;
        localStorage.setItem('jwt', token.token);
        navigate('/chatroom');
      })
      .catch((e: any) => {
        setError(e.response.data);
        console.log(error);
      });
  };
  return (
    <div>
      <h1>Login</h1>
      <LoginRegisterForm
        header="Login"
        username={user.username}
        password={user.password}
        setUsername={(username: string) => setUser({ ...user, username })}
        setPassword={(password: string) => setUser({ ...user, password })}
        usernameMsg="Enter your username"
        passwordMsg="Enter your password"
        formButton="Log in"
        handleOnClick={handleOnLogin}
        error={error}
      />
    </div>
  );
}
