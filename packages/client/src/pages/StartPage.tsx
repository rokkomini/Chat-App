import React from 'react'

export default function StartPage() {
  return (
    <div>
        <div>
            <h1>Welcome to startpage</h1>
        </div>
        <div>
            <div><h2><a href="/login-user">Already a member? Login and start chatting!</a></h2></div>
            <div><h2><a href="/create-user">Not a member? Sign up and start chatting!</a></h2></div>
        </div>
        <div>
            
            <h2><a href="/chatroom">Go to chatroom</a></h2>
        </div>
    </div>
  )
}
