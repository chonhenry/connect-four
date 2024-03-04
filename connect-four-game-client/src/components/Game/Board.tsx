import React from "react";
import boardLayerBlack from "../../assets/images/board-layer-black-large.svg";
import boardLayerWhite from "../../assets/images/board-layer-white-large.svg";
import redTurn from "../../assets/images/turn-background-red.svg";
import yellowTurn from "../../assets/images/turn-background-yellow.svg";
import Circle from "./Circle";

interface Position {
  row: number;
  col: number;
}

const ROW_COUNT = 6;
const COL_COUNT = 7;

const Board = () => {
  const left = [19, 102, 186, 270, 353, 436, 520];
  const top = [19, 102, 186, 269, 352, 436];

  function generateGrid(): Position[][] {
    const grid = [];
    for (let i = 0; i < ROW_COUNT; i++) {
      const row = [];
      for (let j = 0; j < COL_COUNT; j++) {
        row.push({ row: i, col: j });
      }
      grid.push(row);
    }
    return grid;
  }

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

  function generateBoard() {
    return top.map((top, row_idx) => {
      return (
        <div
          key={`row-${row_idx}`}
          id={`row-${row_idx}`}
          className={`bg-re absolute h-[61px] w-full top-[${top}px]`}
        >
          <div className="relative h-full w-full">
            {generateRow(row_idx, top)}
          </div>
        </div>
      );
    });
  }

  function generateRow(row_idx: number, top: number) {
    console.log(row_idx, top);
    return left.map((left, col_idx) => (
      <Circle
        key={`row-${row_idx}-col-${col_idx}`}
        left={left}
        col_idx={col_idx}
        row_idx={row_idx}
      />
    ));
  }

  return (
    <div className="w-full relative">
      {/* <div className="bg-red absolute h-[61px] w-full top-[19px]">
        <div className="relative h-full w-full">
          <div className="bg-yellow absolute w-[61px] h-[61px] rounded-full left-[19px]"></div>
        </div>
      </div>
      <div className="bg-red absolute h-[61px] w-full top-[102px]">
        <div className="relative h-full w-full">
          <div className="bg-yellow absolute w-[61px] h-[61px] rounded-full left-[102px]"></div>
        </div>
      </div>
      <div className="bg-red absolute h-[61px] w-full top-[186px]"></div>
      <div className="bg-red absolute h-[61px] w-full top-[269px]"></div>
      <div className="bg-red absolute h-[61px] w-full top-[352px]"></div>
      <div className="bg-red absolute h-[61px] w-full top-[436px]">
        <div className="relative h-full w-full">
          <div className="bg-yellow absolute w-[61px] h-[61px] rounded-full left-[520px]"></div>
        </div>
      </div> */}

      <img src={boardLayerWhite} className="absolute" />
      {generateBoard()}
      {/* {left.map((left, idx) => generateSingleColumn(left, idx))} */}
      <img src={boardLayerBlack} className="" />

      <div className="bg-yello absolute w-full bottom-0 translate-y-[35px] flex justify-center">
        <img src={redTurn} className="w-[100px]" />
      </div>
    </div>
  );
};

export default Board;
