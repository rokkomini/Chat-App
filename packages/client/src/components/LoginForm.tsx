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

export default function LoginForm() {
  const [input, setInput] = useState("");
  const [user, setUser] = useState<UserItem>();

  const handleInputChange = (e: { target: { value: React.SetStateAction<string>; }; }) => setInput(e.target.value);

  const isError = input === "";
  return (
    <div className="container">
      <a href="/">Back to startpage</a>
      
          <Container maxW='500px'>
          <div className="login-form">
              <FormControl isInvalid={isError}>
                <FormLabel>Username</FormLabel>
                <Input type="username" value={input} onChange={handleInputChange} />
                {!isError ? (
                  <FormHelperText>
                    Enter username to login
                  </FormHelperText>
                ) : (
                  <FormErrorMessage>Username is required.</FormErrorMessage>
                )}
                <FormLabel>Password</FormLabel>
                <Input type="password" value={input} onChange={handleInputChange} />
                {!isError ? (
                  <FormHelperText>
                    Please enter your password
                  </FormHelperText>
                ) : (
                  <FormErrorMessage>Password is required.</FormErrorMessage>
                )}
                <Button colorScheme='black'>Log in</Button>
              </FormControl>
              </div>
          </Container>
     
    </div>
  );
}
