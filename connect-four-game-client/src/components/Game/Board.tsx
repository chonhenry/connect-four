import React from "react";
import boardLayerBlack from "../../assets/images/board-layer-black-large.svg";
import boardLayerWhite from "../../assets/images/board-layer-white-large.svg";
import redCirlce from "../../assets/images/counter-red-large.svg";
import yellowCirlce from "../../assets/images/counter-yellow-large.svg";

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
              <div
                key={`col-${col_idx}-row-${row_idx}`}
                id={`col-${col_idx}-row-${row_idx}`}
                className={`bg-yello absolute w-[61px] h-[61px] rounded-full top-[${top}px] cursor-pointer`}
              ></div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="w-full relative">
      {/* <div className="bg-red absolute left-[19px] w-[61px] h-full">
        <div className="relative w-full h-full">
          <div className="absolute bg-yellow w-[61px] h-[61px] rounded-full top-[19px]"></div>
        </div>
      </div>
      <div className="bg-red absolute left-[102px] w-[61px] h-full">
        <div className="relative w-full h-full">
          <div className="absolute bg-yellow w-[61px] h-[61px] rounded-full top-[102px]"></div>
        </div>
      </div>
      <div className="bg-red absolute left-[186px] w-[61px] h-full">
        <div className="relative w-full h-full">
          <div className="absolute bg-yellow w-[61px] h-[61px] rounded-full top-[186px]"></div>
        </div>
      </div>
      <div className="bg-red absolute left-[270px] w-[61px] h-full">
        <div className="relative w-full h-full">
          <div className="absolute bg-yellow w-[61px] h-[61px] rounded-full top-[269px]"></div>
        </div>
      </div>
      <div className="bg-red absolute left-[353px] w-[61px] h-full">
        <div className="relative w-full h-full">
          <div className="absolute bg-yellow w-[61px] h-[61px] rounded-full top-[352px]"></div>
        </div>
      </div>
      <div className="bg-red absolute left-[436px] w-[61px] h-full">
        <div className="relative w-full h-full">
          <div className="absolute bg-yellow w-[61px] h-[61px] rounded-full top-[436px]"></div>
        </div>
      </div>
      <div className="bg-red absolute left-[520px] w-[61px] h-full">
        <div className="relative w-full h-full">
          <div className="absolute bg-yellow w-[61px] h-[61px] rounded-full top-[436px]"></div>
        </div>
      </div> */}

      <img src={boardLayerWhite} className="absolute" />
      {left.map((left, idx) => {
        return generateSingleColumn(left, idx);
      })}
      <img src={boardLayerBlack} className="" />
    </div>
  );
};

export default Board;

{
  /* <img src={redCirlce} className="absolute top-[18px] left-[17px]" />
      <img src={yellowCirlce} className="absolute top-[108px] left-[17px]" />
      <img src={redCirlce} className="absolute top-[198px] left-[17px]" />
      <img src={yellowCirlce} className="absolute top-[288px] left-[17px]" />
      <img src={redCirlce} className="absolute top-[378px] left-[17px]" />
      <img src={yellowCirlce} className="absolute top-[468px] left-[17px]" /> */
}
