import { useEffect, useState } from 'react';

import { generateRandomNumber } from './helper';

import { StartMenu } from './components/StartMenu';
import { GameMenu } from './components/GameMenu';
import { Playground } from './components/Playground';
import './styles.css';

export const Exercise = () => {
  const [initialTime, setInitialTime] = useState(60);
  const [moleAmount, setMoleAmount] = useState(1);
  const [intervalId, setIntervalId] = useState(null);
  const [intervalId1, setIntervalId1] = useState(null);

  const [isGameStarted, setGameStarted] = useState(false);
  const [molePositionId, setMolePositionId] = useState(
    generateRandomNumber(10)
  );
  const [molePositionId1, setMolePositionId1] = useState(
    generateRandomNumber(10)
  );
  const [gameFinished, setGameFinished] = useState(false); // Nowy stan dla informacji o zakończeniu gry
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(60);

  const activeClassName = gameFinished ? 'text-final' : '';
  const deactiveClassName = !gameFinished ? 'text-final-none' : '';
  const classNameFinalTitle = ` ${deactiveClassName} ${activeClassName}`;

  const handleStartGame = () => {
    setMoleAmount(moleAmount);
    setTime(initialTime); //TODO:ustawic initialTime
    setScore(0);

    setGameStarted(true);

    setGameFinished(false);

    const interval = setInterval(() => {
      setMolePositionId(generateRandomNumber(10));
    }, 2000);

    setIntervalId(interval);

    const interval1 = setInterval(() => {
      setMolePositionId1(generateRandomNumber(10));
    }, 2000);

    setIntervalId1(interval1);
  };

  const handleStopGame = () => {
    setGameStarted(false);
    setGameFinished(true);
    clearInterval(intervalId);
    setIntervalId(null);
    clearInterval(intervalId1);

    setIntervalId1(null);
  };

  useEffect(() => {
    if (isGameStarted) {
      const intervalId = setInterval(() => {
        time > 0 && setTime((prevState) => prevState - 1);
      }, 1000);
      const intervalId1 = setInterval(() => {
        time > 0 && setTime((prevState) => prevState - 1);
      }, 1000);

      return () => {
        clearInterval(intervalId);
        clearInterval(intervalId1);
      };
    }
  }, [time, isGameStarted]);

  useEffect(() => {
    if (time === 0) {
      handleStopGame();
      setGameFinished(true); // Ustawienie stanu, że gra się zakończyła
    }
  }, [time, isGameStarted]);

  useEffect(() => {
    setGameFinished(false); // Zresetowanie stanu gameFinished przy zmianie ustawień gry
  }, [initialTime, moleAmount]);

  // useEffect(() => {
  //   return (
  //     <div>
  //       Gratulaje udało Ci się złapać {score} kretów w czasie{' '}
  //       {initialTime - time} sekund.
  //     </div>
  //   );
  // }, [!isGameEnded]);

  return (
    <div>
      <h3>
        Gra polegająca na podążaniu za krecikiem i trafieniu na kwadrat, w
        którym się pojawił.
      </h3>

      {gameFinished &&
        time >= 0 && ( // Warunek sprawdzający, czy gra się zakończyła
          <div className={classNameFinalTitle}>
            Gratulacje! Udało Ci się złapać {score} kretów w czasie{' '}
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
            molePositionId1={molePositionId1}
            score={score}
            setScore={setScore}
          />
        </>
      )}
    </div>
  );
};
