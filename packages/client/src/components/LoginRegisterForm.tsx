import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Container,
  Button,
} from '@chakra-ui/react';
import { UserItem } from '@my-chat-app/shared';

export interface FormProps {
  header: string;
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
  const [user, setUser] = useState<UserItem>({ username: '', password: '' });

  return (
    <div className="container">
      <a href="/">Back to startpage</a>

      <Container maxW="500px">
       
        <div className="login-form">
        <h1>{form.header}</h1>
          <FormControl>
            {form.error === '' ? (
              ''
            ) : (
              <FormHelperText>{form.error}</FormHelperText>
            )}

            <br />
            <FormLabel>Username</FormLabel>
            <Input
              type="username"
              placeholder="Enter username"
              value={form.username}
              onChange={(e) => form.setUsername(e.target.value)}
            />

            <br />
            <br />
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              placeholder="Enter password"
              value={form.password}
              onChange={(e) => form.setPassword(e.target.value)}
            />

            <br />
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
