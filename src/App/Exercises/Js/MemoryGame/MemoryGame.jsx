import './styles.css';

import { MenuView } from './MenuView';
import { PlaygroundView } from './PlaygroundView';
import { GameView } from './GameView';
import { useEffect, useState } from 'react';
import { SummaryView } from './SummaryView';

const INITIAL_TIME = 60;

export const MemoryGame = () => {
  // game states

  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isGameStopped, setIsGameStopped] = useState(false);
  const [time, setTime] = useState(INITIAL_TIME);
  const [initialTime, setInitialTime] = useState(INITIAL_TIME);

  useEffect(() => {
    if (time === 0) {
      setIsGameStarted(false);
      setTime(initialTime);
    }
  }, [time, initialTime]);

  return (
    <div>
      <h4 className="mg-header">
        Gra polegająca na zapamiętywaniu odkrytych kafli i łączeniu ich w pary
      </h4>

      {isGameStopped && <SummaryView />}
      {!isGameStarted && (
        <MenuView
          setGameStarted={setIsGameStarted}
          setGameStopped={setIsGameStopped}
          setInitialTime={setInitialTime}
          setTime={setTime}
        />
      )}

      {isGameStarted && (
        <GameView
          initialTime={initialTime}
          time={time}
          setTime={setTime}
          setGameStarted={setIsGameStarted}
          setGameStopped={setIsGameStopped}
        />
      )}
      {isGameStarted && <PlaygroundView />}
    </div>
  );
};
