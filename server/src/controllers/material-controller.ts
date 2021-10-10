import { Request, Response } from "express";
import { ObjectId } from "mongoose";
import classService from "../database/class-service";
import materialService from "../database/material-service";
import TopicTitle from "../dtos/topic-title-dto";

class MaterialController {
  async newMaterial(req: Request, res: Response) {
    // get the classid from the req body

    const { classId, topic, title, description, topicId } = req.body;

    // get the title description from the body
    // validate the request

    if (!classId || !topic || !title)
      return res.status(400).json({ msg: "bad request!" });

    // verify the class id

    let classRoom;

    try {
      classRoom = await classService.getClass({ _id: classId });
    } catch (err) {
      return res.status(500).json({ message: "Db error" });
    }

    // validate the classroom

    if (!classRoom) return res.status(404).json({ message: "No class found!" });

    // check if topic already exists or not

    let topicFound;

    if (topicId) {
      try {
        topicFound = await materialService.findTopic({ _id: topicId });
      } catch (err) {
        return res.status(500).json({ message: "Db error" });
      }

      // check topic is found or not

      if (!topicFound)
        return res.status(404).json({ message: "No topic found!" });
    }

    // if not topic id then create new topic

    if (!topicId) {
      try {
        topicFound = await materialService.newTopic({
          title: topic,
          classId: classRoom._id,
          creatorId: classRoom.userId,
        });
      } catch (err) {
        return res.status(500).json({ message: "Db error" });
      }
    }

    // add the material to the database

    const data = {
      title: title,
      description: description,
      topic: topicFound,
      classId: classId,
      creatorId: req.body.user._id,
    };

    let material;

    try {
      material = await materialService.newMaterial(data);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: "Db error" });
    }

    return res.json({ material, created: true, topic: topicFound });
  }

  async getTopics(req: Request, res: Response) {
    // get the id from the params
    const { id } = req.params;
    // validate the id

    if (!id) return res.status(400).json({ message: "Bad request" });

    // get the classroom

    let classRoom;

    try {
      classRoom = await classService.getClass({ _id: id });
    } catch (err) {
      return res.status(500).json({ message: "Db error" });
    }

    // check if class room exists or not

    if (!classRoom)
      return res.status(404).json({ messgae: "No class room found!" });

    // get the topics with given class id

    let topics: any[];

    try {
      topics = await materialService.findTopics({ classId: id });
    } catch (err) {
      return res.status(500).json({ message: "Db error" });
    }

    let topicTitles: { title: string; _id: ObjectId }[] = [];

    // set the title only array

    topics.forEach((topic) => {
      const newTopic = new TopicTitle(topic);
      topicTitles.push(newTopic);
    });

    if (topicTitles.length === 0) {
      return res.status(404).json({ message: "no topics found!" });
    }

    return res.json({ topics: topicTitles });
  }
}

export default new MaterialController();
