import express, { Application } from "express";
import cors from "cors";
import authRoutes from "./router/auth-routes";
import classRoutes from "./router/class-router";
import { config } from "dotenv";
import connection from "./db";
import cookieParser from "cookie-parser";

config();

const app: Application = express();

const PORT = process.env.PORT || 9000;

// Middlewares
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "DELETE"],
    credentials: true,
  })
);

app.use(cookieParser());

app.use(express.json({ limit: "10mb" }));

app.use("/storage", express.static("storage"));

// database connection

connection();

// Routes

app.use("/api", authRoutes);
app.use("/api", classRoutes);

app.listen(PORT, () => console.log(`Running on port ${PORT}`));
