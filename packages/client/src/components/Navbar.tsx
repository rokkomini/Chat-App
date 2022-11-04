import { UserItem } from '@my-chat-app/shared'
import React from 'react'
import {
    Button,
  } from "@chakra-ui/react";

export default function Navbar(props: {username : string}) {

    const logout = () => {
        localStorage.clear();
        window.location.reload();
        console.log("user logged out");
      };

  return (
    <div className='navbar'>
        <h2>{props.username}'s chatroom</h2>
        <Button colorScheme='dark' onClick={logout}>Logout</Button>
    </div>
  )
}
