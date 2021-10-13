import { Router } from "express";
import materialController from "../controllers/material-controller";
import userMiddleware from "../middlewares/user-middleware";

const router = Router();

router.post("/new-material", userMiddleware, materialController.newMaterial);

router.get("/get-topics/:id", userMiddleware, materialController.getTopics);

router.get("/get-materials", userMiddleware, materialController.getMaterials);

router.get("/topics", userMiddleware, materialController.topics);

router.get("/material", userMiddleware, materialController.viewMaterial);

export default router;
