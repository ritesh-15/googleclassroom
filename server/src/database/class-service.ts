import { ObjectId } from "mongoose";
import ClassRoom from "../models/class-modal";
import JoinedClass from "../models/join-class-modal";

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

  async joinClass(data: any) {
    return await JoinedClass.create(data);
  }

  async getJoinedClasses(query: any) {
    return await JoinedClass.find(query)
      .populate("classId")
      .populate("userId", "-password")
      .populate("creatorUserInfo", "-password");
  }

  async getAllCreatedClasses(query: any) {
    return await ClassRoom.find(query).populate("userId", "-password");
  }
}

export default new ClassService();
