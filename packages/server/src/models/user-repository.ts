import { UserItem } from "@my-chat-app/shared";
import { model, Schema } from "mongoose";
import bcrypt from "bcryptjs";

const UserSchema = new Schema(
  {
    username: String,
    password: String,
  },
  {
    timestamps: true,
    collection: "users",
  }
);

const UserModel = model<UserItem>("UserItem", UserSchema);

const saveNewUser = async (userItem: UserItem): Promise<void> => {
  const salt = await bcrypt.genSalt(10);
  userItem.password = await bcrypt.hash(userItem.password, salt);
  const newUser = new UserModel(userItem);
  newUser.save();
};

const loadUserByUsername = async (
  username: string
): Promise<UserItem | null> => {
  return await UserModel.findOne({ username: username }).select('-password').exec();
};

const checkCredentials = async (
  username: string, password: string
): Promise<UserItem | null> => {
  const user = await UserModel.findOne({username: username})
  if (user && await bcrypt.compare(password, user.password)) {
    return user
  }
  return null
};

export { saveNewUser, loadUserByUsername, checkCredentials };
