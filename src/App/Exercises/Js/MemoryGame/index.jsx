import './styles.css';
// import './MenuView.css';
import { useEffect, useState } from 'react';
import { GameView } from './GameView/GameView';
import { MenuView } from './MenuView/MenuView';
import { Playground } from './Playground/Playground';

export function MemoryGame() {
  const [isGameStarted, setGameStarted] = useState(false);
  const [time, setTime] = useState(0);
  const [timeInterval, setTimeInterval] = useState();
  const [boardSize, setBoardSize] = useState();
  const [amount, setAmount] = useState(0);
  const [isGameEnded, setGameEnded] = useState(false);
  const [myTime, setMyTime] = useState(0);
  useEffect(() => {
    if (isGameStarted) {
      const gameInterval = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
      setTimeInterval(gameInterval);
    } else {
      clearInterval(timeInterval);
      setTime(0);
    }
  }, [isGameStarted]);

  return (
    <>
      <h4>Memory game</h4>
      <p>Gra plegająca na</p>
      {isGameStarted ? (
        <GameView
          setGameStarted={setGameStarted}
          time={time}
          amount={amount}
          setAmount={setAmount}
        />
      ) : (
        <MenuView
          setGameStarted={setGameStarted}
          setBoardSize={setBoardSize}
          setGameEnded={setGameEnded}
        />
      )}
      {isGameStarted && (
        <Playground
          boardSize={boardSize}
          amount={amount}
          setAmount={setAmount}
          setGameEnded={setGameEnded}
          setTime={setTime}
          isGameEnded={isGameEnded}
          setMyTime={setMyTime}
        />
      )}
    </>
  );
}
