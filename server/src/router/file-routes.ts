import { Router } from "express";
import fileController from "../controllers/file-controller";
import userMiddleware from "../middlewares/user-middleware";

const router = Router();

router.post("/new-file", userMiddleware, fileController.uploadFile);

export default router;
