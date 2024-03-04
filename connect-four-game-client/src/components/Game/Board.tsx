import React from "react";
import boardLayerBlack from "../../assets/images/board-layer-black-large.svg";
import boardLayerWhite from "../../assets/images/board-layer-white-large.svg";
import redTurn from "../../assets/images/turn-background-red.svg";
import yellowTurn from "../../assets/images/turn-background-yellow.svg";
import Circle from "./Circle";

const Board = () => {
  const left = [19, 102, 186, 270, 353, 436, 520];
  const top = [19, 102, 186, 269, 352, 436];

  const generateSingleColumn = (left: number, col_idx: number) => {
    return (
      <div
        key={`column-${col_idx}`}
        id={`column-${col_idx}`}
        className={`bg-re absolute left-[${left}px] w-[61px] h-full`}
      >
        <div className="relative w-full h-full">
          {top.map((top, row_idx) => {
            return (
              <Circle
                key={`col-${col_idx}-row-${row_idx}`}
                top={top}
                col_idx={col_idx}
                row_idx={row_idx}
              />
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="w-full relative">
      <img src={boardLayerWhite} className="absolute" />
      {left.map((left, idx) => generateSingleColumn(left, idx))}
      <img src={boardLayerBlack} className="" />

      <div className="bg-yello absolute w-full bottom-0 translate-y-[35px] flex justify-center">
        <img src={redTurn} className="w-[100px]" />
      </div>
    </div>
  );
};

export default Board;
