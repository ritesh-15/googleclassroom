import { Router } from "express";
import authController from "../controllers/auth-controller";
import userMiddleware from "../middlewares/user-middleware";

const router: Router = Router();

router.post("/register", authController.register);

router.post("/login", authController.login);

router.get("/user/:email", authController.checkUser);

router.get("/v/refresh", authController.refresh);

// Log out route
// Create a middleware to verify the user and then log out the user

router.delete("/v/logout", userMiddleware, authController.logOut);

export default router;
