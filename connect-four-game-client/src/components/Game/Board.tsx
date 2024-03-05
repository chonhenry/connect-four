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

export interface Size {
  s: number;
  m: number;
  l: number;
}

const md_row0 = "md:top-[19px]";
const md_row1 = "md:top-[102px]";
const md_row2 = "md:top-[186px]";
const md_row3 = "md:top-[269px]";
const md_row4 = "md:top-[352px]";
const md_row5 = "md:top-[436px]";

const xs_row0 = "xs:top-[15px]";
const xs_row1 = "xs:top-[83px]";
const xs_row2 = "xs:top-[152px]";
const xs_row3 = "xs:top-[220px]";
const xs_row4 = "xs:top-[288px]";
const xs_row5 = "xs:top-[357px]";

const row0 = "top-[12px]";
const row1 = "top-[64px]";
const row2 = "top-[115px]";
const row3 = "top-[167px]";
const row4 = "top-[218px]";
const row5 = "top-[270px]";

const ROW_COUNT = 6;
const COL_COUNT = 7;

const Board = () => {
  // const top = [19, 102, 186, 269, 352, 436];
  const rows = [
    { s: 12, m: 15, l: 19 },
    { s: 64, m: 83, l: 102 },
    { s: 115, m: 152, l: 186 },
    { s: 167, m: 220, l: 269 },
    { s: 218, m: 288, l: 352 },
    { s: 270, m: 357, l: 436 },
  ];

  // const left = [19, 102, 186, 270, 353, 436, 520];
  const columns = [
    { s: 12, m: 15, l: 19 },
    { s: 63, m: 83, l: 102 },
    { s: 115, m: 151, l: 186 },
    { s: 166, m: 220, l: 270 },
    { s: 218, m: 288, l: 353 },
    { s: 269, m: 356, l: 436 },
    { s: 321, m: 425, l: 520 },
  ];

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
    return rows.map((row, row_idx) => {
      return (
        <div
          key={`row-${row_idx}`}
          id={`row-${row_idx}`}
          className={`bg-re absolute h-[61px] w-full top-[${row.s}px] xs:top-[${row.m}px] md:top-[${row.l}px]`}
        >
          <div className="relative h-full w-full">{generateRow(row_idx)}</div>
        </div>
      );
    });
  }

  function generateRow(row_idx: number) {
    return columns.map((column, col_idx) => {
      const pos: Position = {
        row: row_idx,
        col: col_idx,
        selected: null,
      };

      return (
        <Circle
          key={`row-${row_idx}-col-${col_idx}`}
          left={column}
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

      <div className="bg-yello absolute w-full bottom-0 translate-y-[30px] xs:translate-y-[45px] md:translate-y-[35px] flex justify-center">
        <img
          src={redTurn}
          className="w-[70px] xs:w-[100px]"
          onClick={() => console.log(grid)}
        />
      </div>
    </div>
  );
};

export default Board;
