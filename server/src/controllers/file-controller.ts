import { Request, Response } from "express";
import multer from "multer";
import { v4 as uuidV4 } from "uuid";
import fileService from "../database/file-service";

const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    const name = uuidV4() + file.originalname;
    cb(null, name);
  },
});

const upload = multer({ storage }).single("file");

class FileController {
  async uploadFile(req: Request, res: Response) {
    upload(req, res, async (err) => {
      const { materialId, user } = req.body;

      if (!materialId || !user)
        return res.status(400).json({ msg: "Bad request!" });

      if (err)
        return res.status(500).json({ message: "Internal server error!" });

      if (!req.file) return res.status(404).json({ message: "No file found!" });

      const data = {
        filename: req.file.filename,
        url: `http://localhost:9000/uploads/${req.file.filename}`,
        size: req.file.size,
        type: req.file.mimetype,
        userId: user._id,
        materialId,
      };

      let file;

      try {
        file = await fileService.createNewFile(data);
      } catch (err) {
        return res.status(500).json({ msg: "Database error!" });
      }

      if (!file) return res.status(500).json({ msg: "something went wrong!" });

      return res.json({ file, uploaded: true, error: null });
    });
  }
}

export default new FileController();
