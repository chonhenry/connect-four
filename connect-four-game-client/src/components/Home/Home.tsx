import { useState } from "react";
import logo from "../../assets/images/logo.svg";
import player from "../../assets/images/player-vs-player.svg";
import { Link } from "react-router-dom";
import Rules from "../Rules/Rules";

const Home = () => {
  const [rulesOpen, setRulesOpen] = useState(false);
  const [name, setName] = useState("");

  function generateRoom() {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    const LENGTH = 8;
    const charactersLength = characters.length;

    for (let i = 0; i < LENGTH; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="bg-purple w-[480px] h-[435px] mx-2 rounded-3xl border-2 border-b-8 flex flex-col justify-center items-center">
        <div className="mb-8">
          <img src={logo} />
        </div>

        <input
          className="rounded-2xl border-2 border-b-[5px] mb-3 py-2 px-4 w-10/12 h-[50px]"
          placeholder="Enter your name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className="mb-3 px-4 border-2 border-b-[5px] w-10/12 h-[50px] bg-yellow rounded-lg active:border-dark-purple uppercase flex justify-between items-center">
          <div className="">player vs player</div>
          <img src={player} className="h-[30px]" />
        </button>
        <Link
          className="text-left px-4 border-2 border-b-[5px] w-10/12 h-[50px] bg-white rounded-lg active:border-dark-purple"
          to="/rules"
        >
          <button className="h-full uppercase">game rules</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
