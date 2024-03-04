import React from "react";
import Board from "./Board";
import { useParams } from "react-router-dom";
import logo from "../../assets/images/logo.svg";

const Game = () => {
  const params = useParams<{ roomId: string }>();

  return (
    <div className="bg-purple w-screen h-screen flex justify-center">
      <div className="h-full w-11/12 xs:w-[630px] md:w-[600px] flex flex-col justify-center">
        <div className="mb-3 flex justify-between items-center">
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

        <Board />

        {/* <div className="w-full relative">
          <img src={redCirlce} className="absolute top-[18px] left-[17px]" />
          <img
            src={yellowCirlce}
            className="absolute top-[108px] left-[17px]"
          />
          <img src={redCirlce} className="absolute top-[198px] left-[17px]" />
          <img
            src={yellowCirlce}
            className="absolute top-[288px] left-[17px]"
          />
          <img src={redCirlce} className="absolute top-[378px] left-[17px]" />
          <img
            src={yellowCirlce}
            className="absolute top-[468px] left-[17px]"
          />
          <img src={boardLayerWhite} className="absolute" />
          <img src={boardLayerBlack} className="" />
        </div> */}
      </div>
    </div>
  );
};

export default Game;
