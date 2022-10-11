import { UserItem } from "@my-chat-app/shared";
import { model, Schema } from "mongoose";

const UserSchema = new Schema(
  {
    username: String,
    password: String,
  },
  {
    timestamps: true,
    collection: "users" 
  }
);

const UserModel = model<UserItem>("UserItem", UserSchema);

const saveNewUser = async (userItem: UserItem): Promise<void> => {
  const newUser = new UserModel(userItem);
  newUser.save();
};

const loadUserByUsername = async (
  username: string
): Promise<UserItem | null> => {
  return await UserModel.findOne({ username: username }).exec();
};

export { saveNewUser, loadUserByUsername };
