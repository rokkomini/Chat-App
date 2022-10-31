import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Container
} from "@chakra-ui/react";

export default function LoginForm() {
  const [input, setInput] = useState("");

  const handleInputChange = (e: { target: { value: React.SetStateAction<string>; }; }) => setInput(e.target.value);

  const isError = input === "";
  return (
    <div>
      LoginForm
      <Container maxW='500px'>
          <FormControl isInvalid={isError}>
            <FormLabel>Email</FormLabel>
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
          </FormControl>
      </Container>
    </div>
  );
}
