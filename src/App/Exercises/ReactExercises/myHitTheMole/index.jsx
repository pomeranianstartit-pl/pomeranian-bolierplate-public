import { useEffect, useState } from 'react';

import { StartMenu } from './components/StartMenu';
import './styles.css';
import { GameField } from './components/GameField';
import { Playground } from './components/PlayGround';
import { generateRandomNumber } from '../HitTheMole/helper';
import { NUMBER_OF_FIELDS, TIME_OF_MOLE } from './defaultSettings';
import { clear } from '@testing-library/user-event/dist/clear';

export const HitTheMole = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isGameStopped, setIsGameStopped] = useState(false);
  const [molePosition, setMolePosition] = useState(
    generateRandomNumber(NUMBER_OF_FIELDS)
  );
  const [score, setScore] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const [gameTime, setGameTime] = useState(60);
  const [leftTime, setLeftTime] = useState(gameTime);
  const [numberOfMoles, setNumberOfMoles] = useState(1);

  const handleStartGame = () => {
    setIsGameStarted(true);
    setLeftTime(gameTime);
    setScore(0);
    setIsGameStopped(false);

    const interval = setInterval(() => {
      setMolePosition(generateRandomNumber(NUMBER_OF_FIELDS));
    }, TIME_OF_MOLE);

    setIntervalId(interval);
  };

  const handleStopGame = () => {
    setIsGameStarted(false);
    setIsGameStopped(true);
    console.log('game stopped');
  };

  useEffect(() => {
    console.log(gameTime, 'new game time');
    console.log(typeof gameTime);
  }, [gameTime]);

  useEffect(() => {
    if (isGameStarted) {
      const countDown = setInterval(() => {
        leftTime > 0 && setLeftTime((prevState) => prevState - 1);
      }, 1000);
      return () => {
        clearInterval(countDown);
      };
    }
  }, [leftTime, isGameStarted]);

  return (
    <div>
      <h3 className="game--description">
        Gra polegająca na podążaniu za krecikiem i trafieniu na kwadrat, w
        którym się pojawił.
      </h3>
      <div></div>
      <div className="obce">
        {!isGameStarted ? (
          <StartMenu
            setGameTime={setGameTime}
            setNumberOfMoles={setNumberOfMoles}
            handleStartGame={handleStartGame}
          />
        ) : (
          <>
            <GameField time={leftTime} score={score} func={handleStopGame} />
            <Playground molePosition={molePosition} />
          </>
        )}
      </div>
    </div>
  );
};