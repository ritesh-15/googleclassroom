import { ObjectId } from "mongoose";

export default interface UserInterface {
  name: string;
  email: string;
  avatar?: string;
  password: string;
  _id?: ObjectId;
}
