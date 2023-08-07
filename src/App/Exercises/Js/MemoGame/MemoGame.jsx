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
  const [numberOfMemo, setNumberOfMemo] = useState(1);
  const [initialTime, setInitialTime] = useState(INITIAL_TIME);
  const [elements, setElements] = useState(0);

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
          setNumberOfMemo={setNumberOfMemo}
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
          elements={elements}
          setGameStarted={setIsGameStarted}
          setGameStopped={setIsGameStopped}
        />
      )}
      {isGameStarted && (
        <PlaygroundView elements={elements} score={score} setScore={setScore} />
      )}
    </div>
  );
};
