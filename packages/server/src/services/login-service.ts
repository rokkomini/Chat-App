import { UserItem } from "@my-chat-app/shared";
import jwt from "jsonwebtoken";
import { checkCredentials } from "../models/user-repository";

const loginUser = async (userItem: UserItem) => {
  if (!userItem.username || !userItem.password) {
    throw new Error("Username or password is missing");
  }
  const isMatch = await checkCredentials(userItem.username, userItem.password);

  if (isMatch) {
    const token = jwt.sign(
      { username: userItem.username },
      process.env.JWT_SECRET as string,
      {
        expiresIn: "1800s",
      }
    );
    return { username: userItem.username, token: token };
  } else {
    throw new Error("Invalid credentials");
  }
};

export { loginUser };
