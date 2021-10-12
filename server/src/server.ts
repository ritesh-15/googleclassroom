import express, { Application } from "express";
import cors from "cors";
import authRoutes from "./router/auth-routes";
import classRoutes from "./router/class-router";
import materialRoutes from "./router/material-router";
import { config } from "dotenv";
import connection from "./db";
import cookieParser from "cookie-parser";
import { Server } from "socket.io";
import Emitter from "events";

config();

const app: Application = express();

const PORT = process.env.PORT || 9000;

// Middlewares

process.setMaxListeners(0);

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

const eventEmitter = new Emitter({});

app.set("eventEmitter", eventEmitter);

// database connection

connection();

// Routes

app.use("/api", authRoutes);
app.use("/api", classRoutes);
app.use("/api/m", materialRoutes);

const server = app.listen(PORT, () => console.log(`Running on port ${PORT}`));

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    credentials: true,
  },
});

io.on("connection", (socket) => {
  socket.on("disconnect", () => {});

  socket.on("join-class-room", (data) => {
    const id = data.id;
    socket.join(id);

    console.log("connected user ", data.user, id);

    // new topic created

    socket.on("new-topic", (newTopic) => {
      console.log(newTopic);
      io.to(id).emit("new-topic-created", newTopic);
    });

    socket.on("testing", (test) => {
      console.log(test);
      io.to(id).emit("testing", { message: "Testing" });
    });

    // leave the room

    socket.on("leave-room", (classId) => {
      socket.leave(classId);
    });

    // send the new topic created to the classroom with joined id

    socket.on("new-material", (material) => {
      console.log(material);
      io.to(id).emit("new-material", material);
    });
  });
});
