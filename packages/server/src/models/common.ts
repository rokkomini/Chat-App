import { connect } from "mongoose";

export const setUpMongoDb = async (url: string) => {
  await connect(url).then(() => console.log("Connected to MongoDB"));
};
