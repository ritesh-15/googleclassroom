import { ObjectId } from "mongoose";
import ClassRoom from "../models/class-modal";

class ClassService {
  async createNewClass(data: any) {
    return await ClassRoom.create(data);
  }
  async getClass(query: any) {
    return await ClassRoom.findOne(query).populate("userId", "-password");
  }

  async updateClass(_id: ObjectId, query: any) {
    return await ClassRoom.updateOne({ _id }, query);
  }
}

export default new ClassService();
