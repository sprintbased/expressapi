import dotenv from "dotenv";
import express, { Express } from "express";
import * as http from "http";
import * as socketio from "socket.io";
import { appRouter } from "./src/routes";

dotenv.config();

const app: Express = express();

app.use("/", appRouter);

const server: http.Server = http.createServer(app);
const io: socketio.Server = new socketio.Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket: socketio.Socket) => {
  console.log("connection");
  socket.emit("status", "Hello from Socket.io");
  socket.on("message", (message) => {
    console.info(message);
  });
  socket.on("join", (roomName) => {
    console.log("join: " + roomName);
    socket.join(roomName);
  });

  socket.on("disconnect", () => {
    console.log("client disconnected");
  });
});

global.io = io;

server.listen(process.env.PORT, () => {
  console.log(
    `⚡️[server]: Server is running at http://localhost:${process.env.PORT}`
  );
});

export default app;
