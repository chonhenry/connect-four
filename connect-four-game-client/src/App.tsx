import { useEffect, useState } from "react";
import io from "socket.io-client";
import Home from "./components/Home/Home";

const socket = io("http://localhost:3000");

function App() {
  return (
    <div className="">
      <Home />
    </div>
  );
}

export default App;
