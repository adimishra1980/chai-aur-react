import { useState } from "react";
import "./Lottery.css";
import { genTicket, sum } from "./helper";
import Ticket from "./Ticket";

export default function Lottery({ n=3, winCondition }) {
  let [ticket, setTicket] = useState(genTicket(n));
  let isWinning = winCondition(ticket);

  let newTicket = () => {
    setTicket(genTicket(n));
  };
  
  return (
    <>
      <h2>Lottery! Game</h2>
      <Ticket ticket={ticket}/>

      <button onClick={newTicket}>Buy New Ticket</button>
      <h3>{isWinning && "Congratulations, you Won!!"}</h3>
    </>
  );
}
