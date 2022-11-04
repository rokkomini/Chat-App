import { UserItem } from '@my-chat-app/shared'
import React from 'react'
import {
    Button,
  } from "@chakra-ui/react";

export default function Navbar(userItem : UserItem) {

    const logout = () => {
        localStorage.clear();
        window.location.reload();
        console.log("user logged out");
      };

  return (
    <div>Navbar
        <h2>{userItem.username} chatroom</h2>
        <Button onClick={logout}>Logout</Button>
    </div>
  )
}
