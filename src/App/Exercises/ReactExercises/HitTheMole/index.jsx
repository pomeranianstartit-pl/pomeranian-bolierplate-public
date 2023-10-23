import { useEffect, useState } from 'react';

import { generateRandomNumber } from './helper';

import { StartMenu } from './components/StartMenu';
import { GameMenu } from './components/GameMenu';
import { Playground } from './components/Playground';

export const Exercise = () => {
  const [initialTime, setInitialTime] = useState(60);
  const [moleAmount, setMoleAmount] = useState(1);
  const [intervalId, setIntervalId] = useState(null);
  const [isGameStarted, setGameStarted] = useState(false);
  const [isGameEnded, setGameEnded] = useState(false);
  const [molePositionId, setMolePositionId] = useState(
    generateRandomNumber(10)
  );
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(60);

  const handleStartGame = () => {
    setTime(60);
    setScore(0);
    setGameEnded(false);
    setGameStarted(true);

    const interval = setInterval(() => {
      setMolePositionId(generateRandomNumber(10));
    }, 750);

    setIntervalId(interval);
  };

  const handleStopGame = () => {
    setGameStarted(false);
    setGameEnded(true);
    clearInterval(intervalId);
    setIntervalId(null);
  };

  useEffect(() => {
    if (isGameStarted) {
      const intervalId = setInterval(() => {
        time > 0 && setTime((prevState) => prevState - 1);
      }, 1000);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [time, isGameStarted]);

  useEffect(() => {
    if (time === 0) {
      handleStopGame();
    }
  }, [time]);

  return (
    <div>
      <h3>
        Gra polegająca na podążaniu za krecikiem i trafieniu na kwadrat, w
        którym się pojawił.
      </h3>

      {isGameEnded && (
        <div>
          Gratulaje udało Ci się złać {score} kretów w czasie{' '}
          {initialTime - time} sekund.
        </div>
      )}

      {!isGameStarted ? (
        <StartMenu
          setInitialTime={setInitialTime}
          setMoleAmount={setMoleAmount}
          setGameStarted={handleStartGame}
        />
      ) : (
        <>
          <GameMenu time={time} score={score} stopGame={handleStopGame} />
          <Playground
            molePositionId={molePositionId}
            score={score}
            setScore={setScore}
          />
        </>
      )}
    </div>
  );
};
