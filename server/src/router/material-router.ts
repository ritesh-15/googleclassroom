import { Router } from "express";
import materialController from "../controllers/material-controller";
import userMiddleware from "../middlewares/user-middleware";

const router = Router();

router.post("/new-material", userMiddleware, materialController.newMaterial);

router.get("/get-topics/:id", userMiddleware, materialController.getTopics);

export default router;
