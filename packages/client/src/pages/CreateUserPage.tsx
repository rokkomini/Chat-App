import React from 'react'
import LoginForm from '../components/LoginForm'

export default function CreateUserPage() {
  function handleOnSignUp() {
    console.log('Sign up')
  }
  return (
    <div><LoginForm button='Sign up' handleOnClick={handleOnSignUp}  /></div>
  )
}
