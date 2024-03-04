import { FC, useState } from "react";

interface CircleProps {
  top?: number;
  left?: number;
  col_idx: number;
  row_idx: number;
}

const Circle: FC<CircleProps> = ({ top, left, col_idx, row_idx }) => {
  const [isSelected, setIsSelected] = useState(false);

  function position(): string {
    const pos = {
      row: row_idx,
      col: col_idx,
    };

    return JSON.stringify(pos);
  }

  function getPosition(event: React.MouseEvent<HTMLDivElement>): void {
    const position = JSON.parse(event.currentTarget.id);

    console.log(position);
  }

  return isSelected ? (
    <div
      id={position()}
      className={`bg-yellow absolute w-[61px] h-[61px] rounded-full left-[${left}px]`}
      onClick={getPosition}
    ></div>
  ) : (
    <div
      id={position()}
      className={`hover:bg-yellow absolute w-[61px] h-[61px] rounded-full left-[${left}px] cursor-pointer`}
      onClick={(e) => {
        setIsSelected(true);
        getPosition(e);
      }}
    ></div>
  );

  // return isSelected ? (
  //   <div
  //     id={position()}
  //     className={`bg-yellow absolute w-[61px] h-[61px] rounded-full top-[${top}px] cursor-pointer`}
  //     onClick={getPosition}
  //   ></div>
  // ) : (
  //   <div
  //     id={position()}
  //     className={`hover:bg-yellow absolute w-[61px] h-[61px] rounded-full top-[${top}px] cursor-pointer`}
  //     onClick={(e) => {
  //       setIsSelected(true);
  //       getPosition(e);
  //     }}
  //   ></div>
  // );
};

export default Circle;
