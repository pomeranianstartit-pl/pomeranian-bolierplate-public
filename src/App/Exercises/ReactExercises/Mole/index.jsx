import React, { useEffect, useState } from 'react';
import './styles.css';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export const Mole = () => {
  const [molePosition, setMolePosition] = useState(0);
  const [boardSize, setBoardElements] = useState(10);
  const [time, setTime] = useState(0);
  const [timeInterval, setTimeInterval] = useState(null);
  const [score, setScore] = useState(0);
  const [stage, setStage] = useState([]);
  const [isGameStarted, setGameState] = useState(false);

  function createStage() {
    return new Array(boardSize).fill(0).map((_, i) => ({
      index: i,
    }));
  }

  function startGame() {
    setStage(createStage());
    setGameState(true);
    setMolePosition(getNewPositionOfMole());
  }

  function stopGame() {
    setGameState(false);
  }

  useEffect(() => {
    if (isGameStarted) {
      const timeInterval = setInterval(() => {
        setTime((prevTime) => prevTime + 50);
      }, 50);

      setTimeInterval(timeInterval);
    } else {
      clearInterval(timeInterval);
      setScore(0);
      setStage([]);
      setTime(0);
    }
  }, [isGameStarted]);

  function isMoleOnIndex(index) {
    return molePosition === index;
  }

  function getNewPositionOfMole() {
    let currentPosition = molePosition;
    while (true) {
      const newPosition = getRandomInt(boardSize - 1);
      if (newPosition !== currentPosition) {
        return newPosition;
      }
    }
  }

  function moveMole() {
    setMolePosition(getNewPositionOfMole());
  }

  function clickOnElement(el) {
    if (isMoleOnIndex(el.index)) {
      setScore(score + 1);
      moveMole();
    } else {
      setScore(score - 1);
    }
  }

  function renderCell(el) {
    const cssClasses = ['cell'];

    if (isMoleOnIndex(el.index)) {
      cssClasses.push('mole');
    }

    return (
      <div
        key={el.id}
        className={cssClasses.join(' ')}
        onClick={() => clickOnElement(el)}
      ></div>
    );
  }

  // function formatTime(time) {
  //   const timeInSeconds = Math.floor(time / 1000);
  //   const m = Math.floor(timeInSeconds / 60)
  //     .toString()
  //     .padStart(2, '0');
  //   const s = Math.floor(timeInSeconds % 60)
  //     .toString()
  //     .padStart(2, '0');
  //   return `${m}:${s}`;
  // }

  return (
    <div>
      <div className="menu">
        {/* <div className="menu-text">pozostały czas</div>
        <div className="menu-greyed">{formatTime(time)}</div> */}

        <div className="menu-text">wynik</div>
        <div className="menu-greyed">{score}</div>

        <div className="menu-text">Przyciski sterujące</div>
        {isGameStarted && <button onClick={stopGame}>Stop</button>}
        {!isGameStarted && <button onClick={startGame}>Start</button>}
      </div>

      <div className="stage">{isGameStarted && stage.map(renderCell)}</div>
    </div>
  );
};
