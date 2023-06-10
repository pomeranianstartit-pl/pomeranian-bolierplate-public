import { MenuView } from './MenuView/MenuView';
import { GameView } from './GameView/GameView';
import './styles.css';
import { useEffect, useState } from 'react';
import { Board } from './Board/Board';

export function Memory() {
  const [isGameStartedMemo, setGameStartedMemo] = useState(false);
  const [boardSize, setBoardSize] = useState();
  const [time, setTime] = useState(0);
  const [timeInterval, setTimeInterval ] = useState();
  const [amount, setAmount] = useState(0);
  const [gameEnded, setGameEnded] = useState(false)
  const [myTime, setMyTime] = useState(0)

  console.log(boardSize)

  useEffect(()=>{
    if (isGameStartedMemo) {
        const gameInterval = setInterval(()=>{
          return setTime((prev) => prev + 1)
       }, 1000)
       setTimeInterval(gameInterval);
    } else {
       clearInterval(timeInterval)
       setTime(0)
    }
  }, [isGameStartedMemo])

  return (
    <div>
      <h4>Memory Game</h4>
      <p>
        Gra polegająca na zapamiętywaniu odkrytych kafli i łączeniu ich w pary
      </p>

      {isGameStartedMemo ? (
        <GameView setGameStartedMemo={setGameStartedMemo} time={time} amount={amount} setAmount={setAmount}/>
      ) : (
        <MenuView setGameStartedMemo={setGameStartedMemo} setBoardSize={setBoardSize} myTime={myTime} setAmount={setAmount} amount={amount} gameEnded={gameEnded} boardSize={boardSize}/>
      )}

      {isGameStartedMemo && 
      <Board 
        boardSize={boardSize} 
        setGameStartedMemo={setGameStartedMemo}
        amount={amount} 
        setAmount={setAmount} 
        time={time} 
        setMyTime={setMyTime}
        gameEnded={gameEnded} 
        setGameEnded={setGameEnded}/>}
    </div>
  );
}
