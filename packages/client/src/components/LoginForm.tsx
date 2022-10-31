import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Container,
  Button
} from "@chakra-ui/react";
import { UserItem } from "@my-chat-app/shared";

export default function LoginForm(props: {handleOnClick: (userItem: UserItem) => void, button: string}) {
  const [input, setInput] = useState("");
  const [user, setUser] = useState<UserItem>({ username: "", password: "" });
  function updateForm(value : {}) {
    return setUser((prev) => {
      return { ...prev, ...value }
    })
  }
 

  const handleInputChange = (e: { target: { value: React.SetStateAction<string>; }; }) => setInput(e.target.value);

  const isError = input === "";
  return (
    <div className="container">
      <a href="/">Back to startpage</a>
      
          <Container maxW='500px'>
          <div className="login-form">
              <FormControl isInvalid={isError}>
                <FormLabel>Username</FormLabel>
                <Input type="username" value={user.username} onChange={(e) => updateForm({username: e.target.value})} />
                {!isError ? (
                  <FormHelperText>
                    Enter username to login
                  </FormHelperText>
                ) : (
                  <FormErrorMessage>Username is required.</FormErrorMessage>
                )}
                <FormLabel>Password</FormLabel>
                <Input type="password" value={user.password} onChange={(e) => updateForm({password: e.target.value})} />
                {!isError ? (
                  <FormHelperText>
                    Please enter your password
                  </FormHelperText>
                ) : (
                  <FormErrorMessage>Password is required.</FormErrorMessage>
                )}
                <Button colorScheme='black' onClick={() => props.handleOnClick}>{props.button}</Button>
              </FormControl>
              </div>
          </Container>
     
    </div>
  );
}
