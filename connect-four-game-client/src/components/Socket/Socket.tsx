import io from "socket.io-client";
import { useEffect, useState } from "react";

const socket = io("http://localhost:3000");

function Socket() {
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceived] = useState("");

  const sendMessage = () => {
    socket.emit("send_message", { message, room });
  };

  const joinRoom = () => {
    if (room !== "") {
      socket.emit("join_room", room);
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data: any) => {
      setMessageReceived(data.message);
    });
  }, [socket]);

  return (
    <div className="p-3">
      <input
        className="border mr-2"
        placeholder="Room Number"
        onChange={(event) => {
          setRoom(event.target.value);
        }}
      />
      <button className="border bg-red btn" onClick={joinRoom}>
        Join Room
      </button>
      <br />
      <input
        className="border mr-2"
        placeholder="Message"
        onChange={(event) => {
          setMessage(event.target.value);
        }}
      />
      <button className="border bg-red btn" onClick={sendMessage}>
        Send Message
      </button>
      <h1>{messageReceived}</h1>
    </div>
  );
}

export default Socket;
