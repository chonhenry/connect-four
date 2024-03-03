import React from "react";
import { useParams } from "react-router-dom";

const Game = () => {
  const params = useParams<{ roomId: string }>();
  console.log(params);

  return <div>Game {params.roomId}</div>;
};

export default Game;
