import { useState } from "react";
import logo from "../../assets/images/logo.svg";
import player from "../../assets/images/player-vs-player.svg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="bg-purple w-[480px] h-[435px] mx-2 rounded-3xl border-2 border-b-8 flex flex-col justify-center items-center">
        <div className="mb-8">
          <img src={logo} />
        </div>

        <Link
          className="mb-3 px-4 border-2 border-b-[5px] w-10/12 h-[50px] bg-yellow rounded-lg active:border-dark-purple"
          to="/join-room"
        >
          <button className="uppercase flex justify-between items-center w-full h-full">
            <div className="">player vs player</div>
            <img src={player} className="h-[30px]" />
          </button>
        </Link>

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
