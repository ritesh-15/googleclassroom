import { Request, Response } from "express";
import classService from "../database/class-service";
import generateClassCode from "../helpers/classCode/genrateClassCode";
import { ClassInformation } from "../models/class-modal";
import uploadAvatar from "../services/avatar-upload-service";
import fs from "fs";
import userService from "../database/user-service";
import UserDto from "../dtos/user-dto";
import { ObjectId } from "mongoose";
import UserInterface from "../interfaces/user/user-interface";
import crypto from "crypto";
import PeopleDto from "../dtos/people-dto";

class ClassController {
  async newClass(req: Request, res: Response) {
    // take class name,section,room and subject in the request body
    const { className, section, room, subject, user } = req.body;
    // validate the request check if not class name then send status 400

    if (!className) return res.status(400).json({ message: "Bad request!" });

    // generate unique class code

    const code = crypto.randomBytes(5).toString("hex");

    const data = {
      className,
      section,
      room,
      subject,
      code,
      userId: user._id,
    };

    // save the class data in the database

    let createdClass: ClassInformation | null = null;

    try {
      createdClass = await classService.createNewClass(data);
    } catch (err) {
      return res.status(500).json({ message: "Db error" });
    }

    // validate created class

    if (!createdClass)
      return res.status(500).json({ message: "Something went wrong!" });

    // send the responce to the user

    return res.json({ createdClass });
  }

  async getDetails(req: Request, res: Response) {
    // get id from the parameters

    const { id } = req.params;

    // validate the id
    if (!id) return res.status(400).json({ message: "Bad request!" });

    // check the class with given id in the database

    let classRoom;

    try {
      classRoom = await classService.getClass({ _id: id });
    } catch (error) {
      return res.status(500).json({ message: "Database error!" });
    }

    // Validate the classroom

    if (!classRoom)
      return res
        .status(404)
        .json({ message: "No class room found with this id!" });

    // send the class details to the user

    res.json({ classRoom });
  }

  async uploadBanner(req: Request, res: Response) {
    // take the banner from the request body

    const { banner, classId } = req.body;

    // validate the banner

    if (!banner || !classId)
      return res.status(400).json({ message: "Bad request!" });

    // Chekc if the class exists

    let classRoom: ClassInformation;

    try {
      classRoom = <ClassInformation>(
        await classService.getClass({ _id: classId })
      );
    } catch (err) {
      return res.status(500).json({ msg: "Database error!" });
    }

    if (!classRoom) return res.status(404).json({ msg: "No class found!" });

    // if banner already exists then delete first one

    if (classRoom.banner) {
      const file = classRoom.banner.split("/").splice(4, 1);
      fs.unlink(`./storage/${file}`, (err) => {});
    }

    // upload the banner

    const imagePath = await uploadAvatar(banner, 900);

    if (!imagePath)
      return res
        .status(500)
        .json({ error: true, message: "Something went wrong!" });

    // update the class in database

    const fileUrl = `http://localhost:9000/storage/${imagePath}`;

    try {
      await classService.updateClass(classId, { banner: fileUrl });
    } catch (error) {
      return res.status(500).json({ message: "Database error!" });
    }

    // send the url of the banner to the user

    return res.json({ fileUrl });
  }

  async joinClass(req: Request, res: Response) {
    // get the class id from the body
    const { classCode, user } = req.body;
    // verify the class id

    if (!classCode) return res.status(400).json({ message: "Bad request!" });

    // find the class with this class id in the database

    let classRoom;

    try {
      classRoom = await classService.getClass({ code: classCode });
    } catch (err) {
      return res.status(500).json({ message: "Database error!" });
    }

    // if not found send status 404

    if (!classRoom)
      return res.status(404).json({ message: "No class room found!" });

    // create new joined class with this class id and user id

    let joinedClass;

    try {
      joinedClass = await classService.joinClass({
        classId: classRoom._id,
        userId: user._id,
        creatorUserInfo: classRoom.userId,
      });
    } catch (err) {
      return res.status(500).json({ message: "Database error!" });
    }

    // verify the joined class

    if (!joinedClass)
      return res.status(500).json({ message: "Something went wrong!" });

    // send the responce to the user

    return res.json({ joinedClass, joined: true });
  }

  async getJoinedClasses(req: Request, res: Response) {
    // get the joined classes by the user

    const { user } = req.body;

    let joinedClasses;

    try {
      joinedClasses = await classService.getJoinedClasses({ userId: user._id });
    } catch (err) {
      return res.status(500).json({ message: "database error" });
    }

    if (!joinedClasses)
      return res.status(404).json({ msg: "No joned classes found!" });

    return res.json({ joinedClasses });
  }

  async getCreatedClasses(req: Request, res: Response) {
    const { user } = req.body;
    // get the created classes from the database

    let createdClasses;

    try {
      createdClasses = await classService.getAllCreatedClasses({
        userId: user._id,
      });
    } catch (err) {
      return res.status(500).json({ msg: "database error" });
    }

    if (!createdClasses)
      return res.status(404).json({ message: "no classes found!" });

    // send the found classes

    return res.json({ createdClasses });
  }

  async getPeoples(req: Request, res: Response) {
    // get the class id from the get
    const { id } = req.params;
    // verify the class id

    if (!id) return res.status(400).json({ msg: "bad request!" });

    // find the class

    let classRoom;

    try {
      classRoom = await classService.getClass({ _id: id });
    } catch (err) {
      return res.status(500).json({ msg: "db error" });
    }

    if (!classRoom) return res.status(404).json({ msg: "No classroom found!" });

    // get the joined class user from db

    let peoples;

    try {
      peoples = await classService.getJoinedClasses({
        classId: classRoom._id,
      });
    } catch (err) {
      return res.status(500).json({ msg: "db error" });
    }

    if (!peoples) return res.status(400).json({ msg: "No user found!" });

    // send only neccesaryy data

    let foundPeoples: { name: string; avatar: string }[] = [];

    peoples.forEach((people) => {
      const person = new PeopleDto(people.userId);
      foundPeoples.push(person);
    });

    // send the responce

    return res.json({ peoples: foundPeoples, count: foundPeoples.length });
  }
}

export default new ClassController();
