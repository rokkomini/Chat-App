import { UserItem } from "@my-chat-app/shared";
import { connect, model, Schema } from "mongoose";

const UserSchema = new Schema(
  {
    username: String,
    password: String,
  },
  {
    timestamps: true,
  }
);

const UserModel = model<UserItem>("UserItem", UserSchema);