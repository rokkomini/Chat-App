import { UserItem } from "@my-chat-app/shared";
import { loadUserByUsername, saveNewUser } from "../models/user-repository";

const saveUser = async (userItem: UserItem): Promise<void> => {
  if (!userItem.username || !userItem.password) {
    throw new Error ("Username or password is missing");
  }

  if (userItem.username.length < 6) {
    throw new Error("Username must be at least 6 characters");
  }

  if (userItem.password.length < 6) {
    throw new Error("Password must be at least 6 characters long");
  }

  const usernameNotAvailable = await loadUserByUsername(userItem.username);

  if (usernameNotAvailable) {
    throw new Error("Username is not available");
  }

  await saveNewUser(userItem);
};

export { saveUser };
