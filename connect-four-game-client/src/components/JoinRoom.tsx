import { useState } from "react";
import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const CHARACTERS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
const MIN_LENGTH = 3;
const MAX_LENGTH = 8;
const MIN_NAME_LENGTH = 3;
const MAX_NAME_LENGTH = 15;
const ERROR_MSG = `Room must be longer than ${MIN_LENGTH} characters and shorter than ${MAX_LENGTH} characters and contain only letters and numbers.`;
const ERROR_MSG_NAME = `Name must be longer than ${MIN_NAME_LENGTH} characters and shorter than ${MAX_NAME_LENGTH} characters.`;

const JoinRoom = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [errorMsgInvalidRoom, setErrorMsgInvalidRoom] = useState("");
  const [errorMsgInvalidName, setErrorMsgInvalidName] = useState("");
  const navigate = useNavigate();

  function generateRoom() {
    let result = "";
    const charactersLength = CHARACTERS.length;

    for (let i = 0; i < MAX_LENGTH; i++) {
      result += CHARACTERS.charAt(Math.floor(Math.random() * charactersLength));
    }

    setErrorMsgInvalidRoom("");
    setRoom(result);
  }

  function joinRoom(): void {
    if (room.length < MIN_LENGTH || room.length > MAX_LENGTH) {
      setErrorMsgInvalidRoom(ERROR_MSG);
      return;
    }

    for (let i = 0; i < room.length; i++) {
      if (!CHARACTERS.includes(room[i])) {
        setErrorMsgInvalidRoom(ERROR_MSG);
        return;
      }
    }

    if (name.length < MIN_NAME_LENGTH || name.length > MAX_NAME_LENGTH) {
      setErrorMsgInvalidName(ERROR_MSG_NAME);
      return;
    }

    navigate("/game/" + room);
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="bg-purple w-[480px] mx-2 py-10 rounded-3xl border-2 border-b-8 flex flex-col justify-center items-center">
        <div className="mb-8">
          <img src={logo} />
        </div>

        <input
          className="rounded-2xl border-2 border-b-[5px] py-2 px-4 w-10/12 h-[50px]"
          placeholder="Enter your name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        {errorMsgInvalidName.length > 0 && (
          <p className="text-red text-red-500 text-s w-10/12">
            {errorMsgInvalidName}
          </p>
        )}

        <div className="w-full flex justify-center">
          <div className="h-[2px] w-10 bg-black rounded-full my-3"></div>
        </div>

        <input
          className="rounded-2xl border-2 border-b-[5px] mb-3 py-2 px-4 w-10/12 h-[50px]"
          placeholder="Enter existing room or generate a new one..."
          value={room}
          onChange={(e) => setRoom(e.target.value)}
        />

        {errorMsgInvalidRoom.length > 0 && (
          <p className="text-red text-red-500 text-s mb-3 w-10/12">
            {errorMsgInvalidRoom}
          </p>
        )}

        <button
          className="mb-3 px-4 border-2 border-b-[5px] w-10/12 bg-yellow h-[50px] rounded-lg active:border-dark-purple uppercase"
          onClick={generateRoom}
        >
          Generate room
        </button>

        <button
          className="mb-3 px-4 border-2 border-b-[5px] w-10/12 bg-yellow h-[50px] rounded-lg active:border-dark-purple uppercase"
          onClick={joinRoom}
        >
          join room
        </button>

        <Link
          className="px-4 border-2 border-b-[5px] w-10/12 h-[50px] bg-red rounded-lg active:border-dark-purple"
          to="/"
        >
          <button className="uppercase w-full h-full">Back</button>
        </Link>
      </div>
    </div>
  );
};

export default JoinRoom;
