import { FC, useState } from "react";
import { Position } from "./Board";

interface CircleProps {
  left: number;
  color?: "red" | "yellow";
  position: Position;
  onCircleClick: (position: Position) => void;
}

const Circle: FC<CircleProps> = ({ left, position, onCircleClick }) => {
  const [isSelected, setIsSelected] = useState(false);

  function generateIdUsingPosition(): string {
    const pos = {
      row: position.row,
      col: position.col,
    };

    return JSON.stringify(pos);
  }

  function onClick(event: React.MouseEvent<HTMLDivElement>): void {
    const position = JSON.parse(event.currentTarget.id);

    onCircleClick({ ...position, selected: "yellow" });
  }

  return isSelected ? (
    <div
      id={generateIdUsingPosition()}
      className={`bg-yellow absolute w-[61px] h-[61px] rounded-full left-[${left}px]`}
      onClick={onClick}
    ></div>
  ) : (
    <div
      id={generateIdUsingPosition()}
      className={`hover:bg-yellow absolute w-[61px] h-[61px] rounded-full left-[${left}px] cursor-pointer`}
      onClick={(e) => {
        setIsSelected(true);
        onClick(e);
      }}
    ></div>
  );
};

export default Circle;
