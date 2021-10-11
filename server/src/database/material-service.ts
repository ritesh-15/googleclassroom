import Topic from "../models/topics-modal";
import Material from "../models/material-modal";

class MaterialService {
  async findTopic(query: any) {
    return await Topic.findOne(query);
  }
  async newTopic(data: any) {
    return await Topic.create(data);
  }
  async newMaterial(data: any) {
    return await Material.create(data);
  }
  async findTopics(query: any) {
    return await Topic.find(query)
      .populate("classId")
      .populate("creatorId", "-password");
  }
  async getMaterials(query: any) {
    return await Material.find(query);
  }
}

export default new MaterialService();
