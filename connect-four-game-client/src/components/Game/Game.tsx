import React from "react";
import Board from "./Board";
import { useParams } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import player1 from "../../assets/images/player-one.svg";
import player2 from "../../assets/images/player-two.svg";

const Game = () => {
  const params = useParams<{ roomId: string }>();

  return (
    <div className="bg-purple w-screen h-screen flex justify-center">
      <div className="h-full w-[370px] xs:w-[490px] md:w-[600px] flex flex-col justify-center">
        <div className="flex justify-between items-center">
          <div className="w-1/3">
            <button className="uppercase bg-dark-purple text-white rounded-full py-1 px-3 text-[8px] sm:px-4 sm:text-xsmd:px-6 md:text-base">
              menu
            </button>
          </div>

          <img className="w-[25px] sm:w-[45px] lg:w-[60px]" src={logo} />

          <div className="uppercase w-1/3 flex justify-end">
            <button className="uppercase bg-dark-purple text-white rounded-full py-1 px-3 text-[8px] sm:px-4 sm:text-xsmd:px-6 md:text-base">
              restart
            </button>
          </div>
        </div>

        <div className="flex justify-between my-5">
          <div className="ml-6 w-5/12 relative">
            <div className="uppercase bg-white py-6 pl-9 border-2 border-b-8 rounded-2xl">
              player 1
            </div>
            <div className="absolute top-0 h-full -translate-x-1/2 flex items-center">
              <img className="h-[50px]" src={player1} />
            </div>
          </div>

          <div className="mr-6 w-5/12 relative">
            <div className="uppercase bg-white py-6 pr-10 text-right border-2 border-b-8 rounded-2xl">
              player 2
            </div>
            <div className="absolute top-0 right-0 h-full translate-x-1/2 flex items-center">
              <img className="h-[50px]" src={player2} />
            </div>
          </div>
        </div>

        <Board />
      </div>
    </div>
  );
};

export default Game;
