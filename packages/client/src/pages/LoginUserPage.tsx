import axios from 'axios';
import React from 'react'
import LoginForm from '../components/LoginForm'

export default function LoginUserPage() {
  axios.defaults.baseURL =
  process.env.REACT_APP_BASE_URL || "http://localhost:3001";

  function handleOnLogin() {
    console.log('Login')
  }
  return (
    <div>
    <LoginForm button='Log in' handleOnClick={handleOnLogin} />
    </div>
  )
}
