import React, { useEffect, useState } from 'react';
import './styles.css';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const MOLE_SPEED = 1000;

const DEFAULT_TIME = 60;
const TIME_OPTIONS = [DEFAULT_TIME, 60 * 3, 60 * 2];

const DEFAULT_BOARD_ELEMENTS = 10;
const BOARD_ELEMENT_OPTIONS = [DEFAULT_BOARD_ELEMENTS, 15, 20];

export const Mole = () => {
  const [pickedTimeOption, setTimeOption] = useState();
  const [boardSize, setBoardElements] = useState();

  const [molePosition, setMolePosition] = useState();
  const [moleMovementInterval, setMoleMovementInterval] = useState();

  const [timeInterval, setTimeInterval] = useState();
  const [time, setTime] = useState();

  const [score, setScore] = useState();
  const [stage, setStage] = useState();
  const [lastScore, setLastScore] = useState();

  const [isGameStarted, setGameState] = useState(false);

  function createStage() {
    return new Array(boardSize).fill(0).map((_, i) => ({
      index: i,
    }));
  }

  function startGame() {
    if (!pickedTimeOption || !boardSize) {
      return;
    }
    setGameState(true);
  }

  function stopGame() {
    setGameState(false);
  }

  function startTimer() {
    setTime(pickedTimeOption * 1000);

    const timeInterval = setInterval(() => {
      setTime((prevTime) => prevTime - 50);
    }, 50);

    setTimeInterval(timeInterval);
  }

  /**
   * End game after time
   * */
  useEffect(() => {
    console.log('??C');
    if (time !== null && time <= 0) {
      setLastScore(score);
      stopGame();
    }
  }, [time]);

  /**
   * Passive mole movement
   * */
  useEffect(() => {
    if (Number.isInteger(molePosition)) {
      clearTimeout(moleMovementInterval);

      const newMoleMovementInterval = setTimeout(() => {
        setMolePosition(getNewMolePosition());
      }, MOLE_SPEED);

      setMoleMovementInterval(newMoleMovementInterval);
    }
  }, [molePosition]);

  /** Game state */
  useEffect(() => {
    if (isGameStarted) {
      setStage(createStage());
      startTimer();
      moveMoleRandomly();
      setLastScore(null);
    } else {
      clearInterval(timeInterval);
      clearInterval(moleMovementInterval);
      setMolePosition(null);
      setScore(null);
      setStage([]);
      setTime(null);
      setTimeOption(null);
      setBoardElements(null);
    }

    return () => {
      clearInterval(timeInterval);
      clearTimeout(moleMovementInterval);
    };
  }, [isGameStarted]);

  function isMoleOnCell(cell) {
    return molePosition === cell.index;
  }

  function moveMoleRandomly() {
    setMolePosition(getNewMolePosition());
  }

  /**
   * also preventing of appearing mole in same place
   */
  function getNewMolePosition() {
    let currentPosition = molePosition;

    // It can be good example of dangerous code and hanging window
    while (true) {
      const newPosition = getRandomInt(boardSize - 1);
      if (currentPosition !== newPosition) {
        return newPosition;
      }
    }
  }

  function clickOnCell(cell) {
    if (isMoleOnCell(cell)) {
      setScore(score + 1);
      moveMoleRandomly();
    } else {
      setScore(score - 1);
    }
  }

  function renderCell(cell) {
    return (
      <div
        key={cell.index}
        className={isMoleOnCell(cell) ? 'cell mole' : 'cell'}
        onClick={() => clickOnCell(cell)}
      ></div>
    );
  }

  function formatTime(time) {
    const timeInSeconds = Math.floor(time / 1000);

    const m = Math.floor(timeInSeconds / 60)
      .toString()
      .padStart(2, '0');

    const s = Math.floor(timeInSeconds % 60)
      .toString()
      .padStart(2, '0');

    return `${m}:${s}`;
  }

  function classForTimeOption(timeOption) {
    const defaultClasses = 'menu-button dark-blue-button';
    return timeOption === pickedTimeOption
      ? `${defaultClasses} active-button`
      : defaultClasses;
  }

  function classForBoardOption(boardOption) {
    const defaultClasses = 'menu-button dark-blue-button';
    return boardOption === boardSize
      ? `${defaultClasses} active-button`
      : defaultClasses;
  }

  return (
    <div>
      {!isGameStarted && lastScore !== null && (
        <div class="score">
          Gratulację! Twój wynik to {lastScore} punktów w czasie{' '}
          {pickedTimeOption} sekund!
        </div>
      )}
      <div className={isGameStarted ? 'menu menu-short' : 'menu'}>
        {!isGameStarted && (
          <>
            <div className="menu-text">Czas Gry</div>
            <div className="menu-buttons-options">
              {TIME_OPTIONS.map((timeOption) => (
                <button
                  key={timeOption}
                  className={classForTimeOption(timeOption)}
                  onClick={() => setTimeOption(timeOption)}
                >
                  {timeOption} sekund
                </button>
              ))}
            </div>
            <div className="menu-text">Wielkość planszy</div>
            <div className="menu-buttons-options">
              {BOARD_ELEMENT_OPTIONS.map((boardOption) => (
                <button
                  key={boardOption}
                  className={classForBoardOption(boardOption)}
                  onClick={() => setBoardElements(boardOption)}
                >
                  {boardOption} kafelków
                </button>
              ))}
            </div>
          </>
        )}

        {isGameStarted && (
          <>
            <div className="menu-text">czas do końca</div>
            <div className="menu-greyed">{formatTime(time)}</div>

            <div className="menu-text">wynik</div>
            <div className="menu-greyed">{score}</div>
          </>
        )}

        <div className="menu-text">Przyciski sterujące</div>

        {isGameStarted && (
          <button className="menu-button red-button" onClick={stopGame}>
            Stop
          </button>
        )}

        {!isGameStarted && (
          <button className="menu-button dark-blue-button" onClick={startGame}>
            Start
          </button>
        )}
      </div>

      <div className="stage">{isGameStarted && stage.map(renderCell)}</div>
    </div>
  );
};
