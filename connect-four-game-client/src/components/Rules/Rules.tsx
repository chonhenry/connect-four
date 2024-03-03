import React from "react";
import check from "../../assets/images/icon-check.svg";

interface RulesProps {
  close: () => void;
}

const Rules: React.FC<RulesProps> = ({ close }) => {
  return (
    <div className="bg-white p-8 w-[480px] mx-2 rounded-3xl border-2 border-b-8 relative">
      <h1 className="uppercase text-center text-5xl font-bold mb-5">rules</h1>

      <h3 className="uppercase text-xl text-purple font-bold">objective</h3>
      <p className="mt-4 mb-8">
        Be the first player to connect 4 of the same colored discs in a row
        (either vertically, horizontally, or diagonally).
      </p>

      <h3 className="uppercase text-xl text-purple font-bold">how to play</h3>
      <ol className="my-4 list-decimal">
        <li className="ml-4 mb-2">Red goes first in the first game.</li>
        <li className="ml-4 mb-2">
          Players must alternate turns, and only one disc can be dropped in each
          turn.{" "}
        </li>
        <li className="ml-4 mb-2">
          The game ends when there is a 4-in-a-row or a stalemate.
        </li>
        <li className="ml-4 mb-2 sm:text-yellow">
          The starter of the previous game goes second on the next game.
        </li>
      </ol>

      <div className="absolute w-full left-0 flex justify-center">
        <img src={check} onClick={close} className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Rules;
