// all routes related to class are here

import { Router } from "express";
import classController from "../controllers/class-controller";
import userMiddleware from "../middlewares/user-middleware";

const router = Router();

router.post("/c/new-class", userMiddleware, classController.newClass);

router.get("/c/get/details/:id", userMiddleware, classController.getDetails);

router.post("/c/upload/banner", userMiddleware, classController.uploadBanner);

router.post("/c/join-class", userMiddleware, classController.joinClass);

router.get(
  "/c/get-joined-classes",
  userMiddleware,
  classController.getJoinedClasses
);

router.get(
  "/c/get-created-classes",
  userMiddleware,
  classController.getCreatedClasses
);

router.get("/c/peoples/:id", userMiddleware, classController.getPeoples);

export default router;
