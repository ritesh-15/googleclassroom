import ClassRoom from "../models/class-modal";

class ClassService {
  async createNewClass(data: any) {
    return await ClassRoom.create(data);
  }
}

export default new ClassService();
