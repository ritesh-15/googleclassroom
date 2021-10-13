import { Request, Response } from "express";
import { ObjectId } from "mongoose";
import classService from "../database/class-service";
import materialService from "../database/material-service";
import TopicTitle from "../dtos/topic-title-dto";

class MaterialController {
  async newMaterial(req: Request, res: Response) {
    // get the classid from the req body

    const { classId, topic, title, description, type, due, points } = req.body;

    // get the title description from the body
    // validate the request

    if (!classId || !topic || !title || !type)
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

    try {
      topicFound = await materialService.findTopic({
        classId: classRoom._id,
        title: topic,
      });
    } catch (err) {
      return res.status(500).json({ message: "Db error" });
    }

    // check topic is found or not

    // if not topic id then create new topic

    let isNew = false;

    if (!topicFound) {
      try {
        topicFound = await materialService.newTopic({
          title: topic,
          classId: classRoom._id,
          creatorId: classRoom.userId,
        });
        isNew = true;
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
      type: type,
      due: due,
      points: points,
    };

    let material;

    try {
      material = await materialService.newMaterial(data);
    } catch (err) {
      return res.status(500).json({ message: "Db error" });
    }

    return res.json({ material, created: true, topic: topicFound, isNew });
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

  async getMaterials(req: Request, res: Response) {
    // get the id of the topic from the params
    const { topic, classId } = req.query;

    if (!topic || !classId)
      return res.status(400).json({ message: "Bad request!" });

    // verify the id

    let topicFound;

    try {
      topicFound = await materialService.findTopic({
        _id: topic,
        classId: classId,
      });
    } catch (err) {
      return res.status(500).json({ message: "Database error!" });
    }

    // find the topic with given id

    if (!topicFound)
      return res.status(404).json({ message: "no topic found with this id" });

    // get the material with given topic id and send the responce

    let materials;

    try {
      materials = await materialService.getMaterials({
        topic: topicFound._id,
        classId: classId,
      });
    } catch (err) {
      return res.status(500).json({ message: "Database error" });
    }

    // verify the materials

    if (!materials)
      return res.status(404).json({ message: "no material found" });

    // send the responce

    return res.json({ materials, found: true, topicId: topic, classId });
  }

  async topics(req: Request, res: Response) {
    // get the class id from the request
    const { classId } = req.query;
    // verify the class id

    if (!classId) return res.status(400).json({ messsage: "Bad request" });

    // get the class details

    let classRoom;

    try {
      classRoom = await classService.getClass({ _id: classId });
    } catch (error) {
      return res.status(500).json({ dbError: true });
    }

    if (!classRoom) return res.status(404).json({ classFound: null });

    // get the topics with given class id

    let topics;

    try {
      topics = await materialService.findTopics({ classId });
    } catch (error) {
      return res.status(500).json({ dbError: true, status: 500 });
    }

    if (!topics) return res.status(404).json({ topics: null });

    // send the topics in the responce

    return res.json({ topics, found: topics.length });
  }

  async viewMaterial(req: Request, res: Response) {
    // get the the id from the query
    const { id } = req.query;
    // verify the id
    if (!id) return res.status(400).json({ message: "Bad request!" });
    // get the material with given id
    let material;

    try {
      material = await materialService.getMaterial({ _id: id });
    } catch (error) {
      return res.status(500).json({ message: "database error" });
    }

    if (!material)
      return res
        .status(404)
        .json({ material: null, found: false, status: 404 });

    // send the responce

    res.json({ material, found: true, status: 200 });
  }
}

export default new MaterialController();
