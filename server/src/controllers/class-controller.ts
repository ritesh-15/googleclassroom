import { Request, Response } from "express";
import classService from "../database/class-service";
import generateClassCode from "../helpers/classCode/genrateClassCode";
import { ClassInformation } from "../models/class-modal";

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
}

export default new ClassController();
