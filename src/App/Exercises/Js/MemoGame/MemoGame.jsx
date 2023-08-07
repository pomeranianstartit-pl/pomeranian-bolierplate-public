import './styles.css';

import { MenuView } from './MenuView';
import { GameView } from './GameView';
import { PlaygroundView } from './PlaygroundView';
import { useEffect, useState } from 'react';
import { SummaryView } from './SummaryView';

const INITIAL_TIME = 60;

export const MemoGame = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isGameStopped, setIsGameStopped] = useState(false);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(INITIAL_TIME);
  const [initialTime, setInitialTime] = useState(INITIAL_TIME);

  useEffect(() => {
    if (time === 0) {
      setIsGameStarted(false);
      setTime(initialTime);
    }
  }, [time, initialTime]);

  return (
    <div className="htm-wrapper-memo">
      <h4 className="htm-header-memo">
        Gra polegająca na zapamiętywaniu odkrytych kafli i łączeniu ich w pary
      </h4>

      {isGameStopped && <SummaryView score={score} time={initialTime} />}
      {!isGameStarted && (
        <MenuView
          setTime={setTime}
          setInitialTime={setInitialTime}
          setScore={setScore}
          setGameStopped={setIsGameStopped}
          setGameStarted={setIsGameStarted}
        />
      )}
      {isGameStarted && (
        <GameView
          initialTime={initialTime}
          time={time}
          setTime={setTime}
          score={score}
          setGameStarted={setIsGameStarted}
          setGameStopped={setIsGameStopped}
        />
      )}
      {isGameStarted && <PlaygroundView score={score} setScore={setScore} />}
    </div>
  );
};
