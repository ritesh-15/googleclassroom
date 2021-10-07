// all routes related to class are here

import { Router } from "express";
import classController from "../controllers/class-controller";
import userMiddleware from "../middlewares/user-middleware";

const router = Router();

router.post("/v/new-class", userMiddleware, classController.newClass);

export default router;
