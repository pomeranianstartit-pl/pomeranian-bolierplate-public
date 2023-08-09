import './styles.css';

import { MenuView } from './MenuView';
import { PlaygroundView } from './PlaygroundView';
import { GameView } from './GameView';
import { useEffect, useState } from 'react';
import { SummaryView } from './SummaryView';

export const MemoryGame = () => {
  // game states

  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isGameEnded, setIsGameEnded] = useState(false);
  const [time, setTime] = useState(0);
  const [timeInterval, setTimeInterval] = useState();
  const [myTime, setMyTime] = useState(0);
  const [amount, setAmount] = useState(0);
  const [boardSize, setBoardSize] = useState(8);

  useEffect(() => {
    if (isGameStarted) {
      const gameInterval = setInterval(() => {
        return setTime((prev) => prev + 1);
      }, 1000);
      setTimeInterval(gameInterval);
    } else {
      clearInterval(timeInterval);
      setTime(0);
    }
  }, [isGameStarted]);

  return (
    <div>
      <h4 className="mg-header">
        Gra polegająca na zapamiętywaniu odkrytych kafli i łączeniu ich w pary
      </h4>

      {isGameEnded && <SummaryView myTime={myTime} amount={amount} />}

      {!isGameStarted && (
        <MenuView
          setGameStarted={setIsGameStarted}
          setGameEnded={setIsGameEnded}
          setTime={setTime}
          setAmount={amount}
          time={time}
          amount={amount}
          myTime={myTime}
          setBoardSize={setBoardSize}
        />
      )}

      {isGameStarted && (
        <GameView
          time={time}
          setTime={setTime}
          amount={amount}
          setGameStarted={setIsGameStarted}
          setGameEnded={setIsGameEnded}
        />
      )}
      {isGameStarted && (
        <PlaygroundView
          boardSize={boardSize}
          setGameEnded={setIsGameEnded}
          setGameStarted={setIsGameStarted}
          setMyTime={setMyTime}
          time={time}
          setAmount={setAmount}
          amount={amount}
        />
      )}
    </div>
  );
};
