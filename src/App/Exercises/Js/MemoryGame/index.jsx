import React, { useEffect, useState } from 'react';
import { GameView } from './GameView/GameView';
import { MenuView } from './MenuView/MenuView';
import { Playground } from './Playground/Playground';
import './styles.css';


export const MemoryGame = () => {
const [isGameStarted, setGameStarted] = useState (false);
const [time, setTime] = useState(0);
const [timeInterval, setTimeInterval] =useState ();
const [boardSize, setBoardSize] =useState ();
const [amount, setAmount] = useState ();
const [isGameEnded, setGameEnded] =useState (false);
const [myTime, setMyTime] = useState(0);



useEffect (()=>{
  if (isGameStarted) {
   const gameInterval = setInterval (()=>{
    // previous value from current state: time
    return setTime((prev)=> prev + 1)
   },1000);
   setTimeInterval(gameInterval);
  }
  else {
    clearInterval (timeInterval)
    setTime(0)
  }
  // musimy wyczyścić interwał 
},[isGameStarted])

  return (
    <div>
      <h1>Memo</h1>
      <p>Gra polegająca na zapamiętywaniu odkrytych kafli i łączeniu ich w parze</p>
      {isGameStarted ?
       <GameView setGameStarted={setGameStarted} time ={time} amount={amount}  setAmount={setAmount}/>:
       <MenuView setGameStarted={setGameStarted}
        setBoardSize ={setBoardSize} 
        setAmount={setAmount}
        myTime ={myTime}
        amount = {amount}
        isGameEnded={isGameEnded}
        boardSize={boardSize}
        isGameStarted={isGameStarted}
        
        />

        }
      
      {isGameStarted && <Playground 
      boardSize={boardSize} 
      setAmount={setAmount} 
      setGameEnded={setGameEnded}
      isGameEnded={isGameEnded}
      amount={amount}
      time={time}
      setMyTime={setMyTime}
      myTime={myTime}/>}
     
    </div>
  );
};