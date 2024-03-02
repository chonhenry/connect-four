const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5173", "https://admin.socket.io"],
    credentials: true,
    // methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("a user connected:", socket.id);

  socket.on("join_room", (data) => {
    socket.join(data);
    // console.log("User joined room: " + data);
  });

  socket.on("send_message", (data) => {
    // socket.broadcast.emit("receive_message", data);
    socket.to(data.room).emit("receive_message", data);
  });

  // socket.on("join-room", (roomId) => {
  //   socket.join(roomId);
  // });

  // socket.on("make-move", (roomId, move) => {
  //   io.to(roomId).emit("make-move", move);
  // });

  // socket.on("disconnect", () => {
  //   console.log("user disconnected");
  // });
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
