import { useState } from "react";

export default function LudoBorad() {
  let [moves, setMoves] = useState({ blue: 0, yellow: 0, green: 0, red: 0 });

  let upadateBlue = () => {
    setMoves((prevMoves) => {
      return { ...prevMoves, blue: prevMoves.blue + 1 };
    });
  };
  
  let upadateYellow = () => {
    setMoves((prevMoves) => {
      return { ...prevMoves, yellow: prevMoves.yellow + 1 };
    });
  };
  let upadateGreen = () => {
    setMoves((prevMoves) => {
      return { ...prevMoves, green: prevMoves.green + 1 };
    });
  };
  let upadateRed = () => {
    setMoves((prevMoves) => {
      return { ...prevMoves, red: prevMoves.red + 1 };
    });
  };

  return (
    <div>
      <p>Game Begins!</p>
      <div className="borad">
        <p>Blue moves = {moves.blue} </p>
        <button style={{ backgroundColor: "blue" }} onClick={upadateBlue}>
          +1
        </button>
        <p>Yellow moves = {moves.yellow} </p>
        <button style={{ backgroundColor: "yellow", color: "black" }} onClick={upadateYellow}>
          +1
        </button>
        <p>Green moves = {moves.green} </p>
        <button style={{ backgroundColor: "green" }} onClick={upadateGreen}>+1</button>
        <p>Red moves = {moves.red} </p>
        <button style={{ backgroundColor: "red" }} onClick={upadateRed}>+1</button>
      </div>
    </div>
  );
}
