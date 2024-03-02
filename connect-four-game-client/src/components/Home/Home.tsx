import React from "react";
import logo from "../../assets/images/logo.svg";
import player from "../../assets/images/player-vs-player.svg";

function Home() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="bg-purple w-[480px] h-[435px] rounded-3xl border-2 border-b-8 flex flex-col justify-center items-center">
        <div className="mb-8">
          <img src={logo} />
        </div>

        <input className="rounded-2xl border-2 border-b-[5px] mb-3 py-2 px-4 w-[350px] h-[50px]" />
        <button className="mb-3 px-4 border-2 border-b-[5px] w-[350px] h-[50px] bg-yellow rounded-lg active:border-dark-purple uppercase flex justify-between items-center">
          <div className="">player vs player</div>
          <img src={player} className="h-[30px]" />
        </button>
        <button className="text-left px-4 border-2 border-b-[5px] w-[350px] h-[50px] bg-white rounded-lg active:border-dark-purple uppercase">
          game rules
        </button>
      </div>
    </div>
  );
}

export default Home;
