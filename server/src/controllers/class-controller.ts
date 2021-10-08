import { Request, Response } from "express";
import classService from "../database/class-service";
import generateClassCode from "../helpers/classCode/genrateClassCode";
import { ClassInformation } from "../models/class-modal";
import uploadAvatar from "../services/avatar-upload-service";
import fs from "fs";

class ClassController {
  async newClass(req: Request, res: Response) {
    // take class name,section,room and subject in the request body
    const { className, section, room, subject, user } = req.body;
    // validate the request check if not class name then send status 400

    if (!className) return res.status(400).json({ message: "Bad request!" });

    // generate unique class code

    const code = generateClassCode(7);

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
}

export default new ClassController();
