import React from "react";
import boardLayerBlack from "../../assets/images/board-layer-black-large.svg";
import boardLayerWhite from "../../assets/images/board-layer-white-large.svg";
import redTurn from "../../assets/images/turn-background-red.svg";
import yellowTurn from "../../assets/images/turn-background-yellow.svg";
import Circle from "./Circle";

export interface Position {
  row: number;
  col: number;
  selected: "red" | "yellow" | null;
}

const ROW_COUNT = 6;
const COL_COUNT = 7;

const Board = () => {
  const left = [19, 102, 186, 270, 353, 436, 520];
  const top = [19, 102, 186, 269, 352, 436];

  const grid = generateGrid();

  function generateGrid(): Position[][] {
    const grid = [];
    for (let i = 0; i < ROW_COUNT; i++) {
      const row = [];
      for (let j = 0; j < COL_COUNT; j++) {
        row.push({ row: i, col: j, selected: null });
      }
      grid.push(row);
    }
    return grid;
  }

  function generateBoard() {
    return top.map((top, row_idx) => {
      return (
        <div
          key={`row-${row_idx}`}
          id={`row-${row_idx}`}
          className={`bg-re absolute h-[61px] w-full top-[${top}px]`}
        >
          <div className="relative h-full w-full">{generateRow(row_idx)}</div>
        </div>
      );
    });
  }

  function generateRow(row_idx: number) {
    return left.map((left, col_idx) => {
      const pos: Position = {
        row: row_idx,
        col: col_idx,
        selected: null,
      };

      return (
        <Circle
          key={`row-${row_idx}-col-${col_idx}`}
          left={left}
          position={pos}
          onCircleClick={onCircleClick}
        />
      );
    });
  }

  function onCircleClick(position: Position): void {
    console.log(position);
  }

  return (
    <div className="w-full relative">
      <img src={boardLayerWhite} className="absolute" />
      {generateBoard()}
      <img src={boardLayerBlack} className="" />

      <div className="bg-yello absolute w-full bottom-0 translate-y-[35px] flex justify-center">
        <img
          src={redTurn}
          className="w-[100px]"
          onClick={() => console.log(grid)}
        />
      </div>
    </div>
  );
};

export default Board;
