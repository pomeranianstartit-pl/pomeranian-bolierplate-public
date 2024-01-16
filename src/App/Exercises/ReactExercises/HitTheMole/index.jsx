import { useEffect, useState } from 'react';
import { generateRandomNumber, generateUniqueNumbers } from './helper';
import { StartMenu } from './components/StartMenu';
import { GameMenu } from './components/GameMenu';
import { Playground } from './components/Playground';
import './styles.css';

export const Exercise = () => {
  const [initialTime, setInitialTime] = useState(60);
  const [moleAmount, setMoleAmount] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const [isGameStarted, setGameStarted] = useState(false);
  const [molePositionId, setMolePositionId] = useState(
    generateRandomNumber(10)
  );
  const [molePositionId1, setMolePositionId1] = useState(
    generateRandomNumber(10) && moleAmount === 2
  );
  const [molePositionId2, setMolePositionId2] = useState(
    generateRandomNumber(10) && moleAmount === 3
  );
  const [gameFinished, setGameFinished] = useState(false); // Nowy stan dla informacji o zakończeniu gry
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(60);
  const [time2, setTime2] = useState(0); //dodatkowy stan tylko do wyświetlania wyników aby podczas zmiany time nie zmieniało dynamicznie w tekście czasu

  const activeClassName = gameFinished ? 'text-final' : '';
  const deactiveClassName = !gameFinished ? 'text-final-none' : '';
  const classNameFinalTitle = ` ${deactiveClassName} ${activeClassName}`;

  const initializeMolePositions = () => {
    const liczbagenerate = generateUniqueNumbers(10, moleAmount);
    setMolePositionId(liczbagenerate[0]);
    if (moleAmount > 1) {
      setMolePositionId1(liczbagenerate[1]);
    }
    if (moleAmount > 2) {
      setMolePositionId2(liczbagenerate[2]);
    }
  };

  const handleStartGame = () => {
    setMoleAmount(moleAmount);
    setTime(initialTime); //TODO:ustawic initialTime
    setScore(0);
    setGameStarted(true);

    setGameFinished(false);

    /// Generowanie początkowych pozycji krecików
    initializeMolePositions();

    // Ustawianie intervalu
    const interval = setInterval(() => {
      initializeMolePositions();
    }, 1000);

    setIntervalId(interval);
  };
  const handleStopGame = () => {
    setGameStarted(false);
    setGameFinished(true);
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
        setTime2(initialTime - time);
      };
    }
  }, [time, isGameStarted, moleAmount]);

  useEffect(() => {
    if (time === 0) {
      handleStopGame();

      setGameFinished(true); // Ustawienie stanu, że gra się zakończyła
    }
  }, [time, isGameStarted]);

  return (
    <div>
      <h3>
        Gra polegająca na podążaniu za krecikiem i trafieniu na kwadrat, w
        którym się pojawił.
      </h3>

      {gameFinished &&
        time >= 0 && ( // Warunek sprawdzający, czy gra się zakończyła
          <div className={classNameFinalTitle}>
            Gratulacje! Udało Ci się złapać {score} kretów w czasie {time2}{' '}
            sekund.
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
            molePositionId2={molePositionId2}
            score={score}
            setScore={setScore}
            moleAmount={moleAmount}
          />
        </>
      )}
    </div>
  );
};
