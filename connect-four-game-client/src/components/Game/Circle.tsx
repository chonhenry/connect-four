import { FC, useState } from "react";
import { Position, Size } from "./Board";

interface CircleProps {
  left: Size;
  color: "red" | "yellow" | null;
  position: Position;
  onCircleClick: (position: Position) => void;
  isValid: (row: number, col: number) => boolean;
}

const md_col0 = "md:left-[19px]";
const md_col1 = "md:left-[102px]";
const md_col2 = "md:left-[186px]";
const md_col3 = "md:left-[270px]";
const md_col4 = "md:left-[353px]";
const md_col5 = "md:left-[436px]";
const md_col6 = "md:left-[520px]";

const xs_col0 = "xs:left-[15px]";
const xs_col1 = "xs:left-[83px]";
const xs_col2 = "xs:left-[151px]";
const xs_col3 = "xs:left-[220px]";
const xs_col4 = "xs:left-[288px]";
const xs_col5 = "xs:left-[356px]";
const xs_col6 = "xs:left-[425px]";

const col0 = "left-[12px]";
const col1 = "left-[63px]";
const col2 = "left-[115px]";
const col3 = "left-[166px]";
const col4 = "left-[218px]";
const col5 = "left-[269px]";
const col6 = "left-[321px]";

const redTurn = "bg-red";
const redTurnHover = "hover:bg-red";
const yellowTurn = "bg-yellow";
const yellowTurnHover = "hover:bg-yellow";

const Circle: FC<CircleProps> = ({
  left,
  position,
  color,
  onCircleClick,
  isValid,
}) => {
  const [isSelected, setIsSelected] = useState(false);
  const [selectedColor, setSelectedColor] = useState<"red" | "yellow" | null>(
    null
  );

  function generateIdUsingPosition(): string {
    const pos = {
      row: position.row,
      col: position.col,
    };

    return JSON.stringify(pos);
  }

  function onClick(event: React.MouseEvent<HTMLDivElement>): void {
    const position = JSON.parse(event.currentTarget.id);

    const validPosition = isValid(position.row, position.col);

    if (
      color === undefined ||
      selectedColor !== null ||
      validPosition === false
    )
      return;

    setSelectedColor(color);

    onCircleClick({ ...position, selected: color });
  }

  return selectedColor !== null ? (
    <div
      id={generateIdUsingPosition()}
      className={`bg-${selectedColor} absolute w-[37px] h-[37px] xs:w-[50px] xs:h-[50px] md:w-[61px] md:h-[61px] rounded-full left-[${left.s}px] xs:left-[${left.m}px] md:left-[${left.l}px]`}
      onClick={onClick}
    ></div>
  ) : (
    <div
      id={generateIdUsingPosition()}
      className={`hover:bg-${color} absolute w-[37px] h-[37px] xs:w-[50px] xs:h-[50px] md:w-[61px] md:h-[61px] rounded-full left-[${left.s}px] xs:left-[${left.m}px] md:left-[${left.l}px] cursor-pointer`}
      onClick={onClick}
    ></div>
  );
};

export default Circle;
