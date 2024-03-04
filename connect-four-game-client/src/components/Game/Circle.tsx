import { FC, useState } from "react";

interface CircleProps {
  top: number;
  col_idx: number;
  row_idx: number;
}

const Circle: FC<CircleProps> = ({ top, col_idx, row_idx }) => {
  const mapping = [5, 4, 3, 2, 1, 0];

  const [isSelected, setIsSelected] = useState(false);

  function position(): string {
    const pos = {
      col: col_idx,
      row: mapping[row_idx],
    };

    return JSON.stringify(pos);
  }

  function getPosition(event: React.MouseEvent<HTMLDivElement>): void {
    const position = JSON.parse(event.currentTarget.id);

    // console.log(position);
  }

  return isSelected ? (
    <div
      id={position()}
      className={`bg-yellow absolute w-[61px] h-[61px] rounded-full top-[${top}px] cursor-pointer`}
      onClick={getPosition}
    ></div>
  ) : (
    <div
      id={position()}
      className={`hover:bg-yellow absolute w-[61px] h-[61px] rounded-full top-[${top}px] cursor-pointer`}
      onClick={(e) => {
        setIsSelected(true);
        getPosition(e);
      }}
    ></div>
  );
};

export default Circle;
