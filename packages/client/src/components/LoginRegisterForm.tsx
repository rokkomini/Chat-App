import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Container,
  Button,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { UserItem } from "@my-chat-app/shared";
export interface FormProps {
  username: string;
  password: string;
  setUsername: (username: string) => void;
  setPassword: (password: string) => void;
  usernameMsg: string;
  passwordMsg: string;
  formButton: string;
  handleOnClick: (userItem: UserItem) => void;
  error: string;
}

export default function LoginRegisterForm(form: FormProps) {
  const [input, setInput] = useState("");
  const [user, setUser] = useState<UserItem>({ username: "", password: "" });
  const [username, setUsername] = useState<String>("");
  const [password, setPassword] = useState<String>("");

  function updateForm(value: {}) {
    return setUser((prev) => {
      return { ...prev, ...value };
    });
  }

  let isError = false;

  return (
    <div className="container">
      <a href="/">Back to startpage</a>

      <Container maxW="500px">
        <div className="login-form">
          <FormControl>
            <FormLabel>Username</FormLabel>
            <Input
              type="username"
              value={form.username}
              onChange={(e) => form.setUsername(e.target.value)}
            />

            {form.error === "" ? (
              <FormHelperText>{form.usernameMsg}</FormHelperText>
            ) : (
              <FormHelperText>{form.error}</FormHelperText>
            )}

            <br />
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              value={form.password}
              onChange={(e) => form.setPassword(e.target.value)}
            />

            {form.error === "" ? (
              <FormHelperText>{form.usernameMsg}</FormHelperText>
            ) : (
              <FormHelperText>{form.error}</FormHelperText>
            )}

            <br />
            <Button
              colorScheme="black"
              onClick={() => form.handleOnClick(user)}
            >
              {form.formButton}
            </Button>
          </FormControl>
        </div>
      </Container>
    </div>
  );
}
