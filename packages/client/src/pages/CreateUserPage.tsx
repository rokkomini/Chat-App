import { UserItem } from '@my-chat-app/shared';
import axios from 'axios';
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import LoginRegisterForm from '../components/LoginRegisterForm'
import LoginForm from '../components/LoginRegisterForm'

export default function CreateUserPage() {
  const [user, setUser] = useState<UserItem>({ username: "", password: "" });
  const [error, setError] = useState<string>("");
  axios.defaults.baseURL =
    process.env.REACT_APP_BASE_URL || "http://localhost:3001";

  const navigate = useNavigate();

  const handleOnRegister = async () => {
    console.log("Register", user);

    await axios
      .post("/user/register", {
        username: user.username,
        password: user.password,
      })
      .then((response: any) => {
        const token = response.data;
        localStorage.setItem("jwt", token.token);
        navigate("/login-user");
      })
      .catch((e: any) => {
        setError(e.response.data);
      });
  };
  return (
    <div>
      <LoginRegisterForm 
       username={user.username}
       password={user.password}
       setUsername={(username: string) => setUser({ ...user, username })}
       setPassword={(password: string) => setUser({ ...user, password })}
       usernameMsg="Choose a username"
       passwordMsg='Choose your password'
       formButton="Sign Up"
       handleOnClick={handleOnRegister}
       error={error}/>
    </div>
  )
}
