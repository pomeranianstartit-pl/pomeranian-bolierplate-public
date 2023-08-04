import './styles.css';

import { MenuView } from './MenuView';
import { GameView } from './GameView';
import { PlaygroundView } from './PlaygroundView';
import { useEffect, useState } from 'react';
import { SummaryView } from './SummaryView';

const INITIAL_TIME = 60;

// TODO:
// 1. add delay on game end
// 4. add more time options

// nice to have:
// 5. add more moles

export const HitTheMole = () => {
  // GAME STATES
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isGameStopped, setIsGameStopped] = useState(false);

  // GAME VALUES
  const [score, setScore] = useState(0);
  const [numberOfMoles, setNumberOfMoles] = useState(1);
  const [time, setTime] = useState(INITIAL_TIME);
  const [initialTime, setInitialTime] = useState(INITIAL_TIME);

  useEffect(() => {
    if (time === 0) {
      setIsGameStarted(false);
      setTime(initialTime);
    }
  }, [time, initialTime]);

  return (
    <div className="htm-wrapper">
      <h4 className="htm-header">
        Gra polegająca na podążaniu za krecikiem i trafieniu na kwadrat, w
        którym się pojawił.
      </h4>

      {isGameStopped && <SummaryView score={score} time={initialTime} />}
      {!isGameStarted && (
        <MenuView
          setTime={setTime}
          setNumberOfMoles={setNumberOfMoles}
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
