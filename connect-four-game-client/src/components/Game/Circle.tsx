import { FC, useState } from "react";
import { Position, Size } from "./Board";

interface CircleProps {
  left: Size;
  color?: "red" | "yellow";
  position: Position;
  onCircleClick: (position: Position) => void;
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
      className={`bg-yellow absolute w-[37px] h-[37px] xs:w-[50px] xs:h-[50px] md:w-[61px] md:h-[61px] rounded-full left-[${left.s}px] xs:left-[${left.m}px] md:left-[${left.l}px]`}
      onClick={onClick}
    ></div>
  ) : (
    <div
      id={generateIdUsingPosition()}
      className={`hover:bg-yellow absolute w-[37px] h-[37px] xs:w-[50px] xs:h-[50px] md:w-[61px] md:h-[61px] rounded-full left-[${left.s}px] xs:left-[${left.m}px] md:left-[${left.l}px] cursor-pointer`}
      onClick={(e) => {
        setIsSelected(true);

        onClick(e);
      }}
    ></div>
  );
};

export default Circle;
