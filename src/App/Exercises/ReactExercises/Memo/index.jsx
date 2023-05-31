import React, { useEffect, useState } from 'react';
import './styles.css';

const ASCII_A = 65;

const alpha = Array.from(new Array(26)).map((_e, i) => i + ASCII_A);
const alphabet = alpha.map((x) => String.fromCharCode(x));

const getRandomLetters = (amount) => {
  const shuffled = [...alphabet].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, amount);
};

function shuffleArray(s) {
  for (let i = s.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [s[i], s[j]] = [s[j], s[i]];
  }
  return s;
}

export function createStage() {
  return [
    { character: 'A' },
    { character: 'B' },
    { character: 'C' },
    { character: 'D' },
    { character: 'E' },
    { character: 'F' },
    { character: 'G' },
    { character: 'H' },
    { character: 'A' },
    { character: 'B' },
    { character: 'C' },
    { character: 'D' },
    { character: 'E' },
    { character: 'F' },
    { character: 'G' },
    { character: 'H' },
  ].map((el, i) => ({ ...el, id: i, isGuessed: false, isVisible: false }));
}

function createStageElement(character, i) {
  return { character, id: i, isGuessed: false, isVisible: false };
}

export const Memo = () => {
  const [elements, setElements] = useState(8);
  const [time, setTime] = useState(0);
  const [timeInterval, setTimeInterval] = useState(null);
  const [playAmounts, setPlayAmounts] = useState(0);
  const [firstElementClicked, setFirstElementClicked] = useState(null);
  const [secondElementClicked, setSecondElementClicked] = useState(null);
  const [stage, setStage] = useState([]);
  const [isStarted, setGameState] = useState(false);

  const DEBUG_showAll = true;

  function startGame() {
    const letters = getRandomLetters(elements);
    const stage = [...letters, ...letters].map((letter, i) =>
      createStageElement(letter, i)
    );
    setStage(shuffleArray(stage));
    setGameState(true);
  }

  function stopGame() {
    setGameState(false);
  }

  useEffect(() => {
    if (isStarted) {
      const timeInterval = setInterval(() => {
        setTime((prevTime) => prevTime + 50);
      }, 50);

      setTimeInterval(timeInterval);
    } else {
      clearInterval(timeInterval);
      setFirstElementClicked(null);
      setSecondElementClicked(null);
      setPlayAmounts(0);
      setStage([]);
      setTime(0);
    }
  }, [isStarted]);

  useEffect(() => {
    const firstElement = stage.find((el) => el.id === firstElementClicked);

    const secondElement = stage.find((el) => el.id === secondElementClicked);

    const wasGuessed =
      firstElement?.id !== secondElement?.id &&
      firstElement?.character === secondElement?.character;

    const newStage = stage.map((el) => {
      if (el.id === firstElementClicked || el.id === secondElementClicked) {
        return {
          ...el,
          isVisible: true,
          isGuessed: el.isGuessed || wasGuessed,
        };
      } else {
        return {
          ...el,
          isVisible: false,
        };
      }
    });

    setStage(newStage);
  }, [firstElementClicked, secondElementClicked]);

  function checkElementClicked(el) {
    if (el.id === firstElementClicked || el.isGuessed) {
      return;
    }

    if (!firstElementClicked) {
      setFirstElementClicked(el.id);
      return;
    }

    if (!secondElementClicked) {
      setSecondElementClicked(el.id);
      setPlayAmounts(playAmounts + 1);
      return;
    }

    setSecondElementClicked(null);
    setFirstElementClicked(el.id);
  }

  function clickOnElement(id) {
    checkElementClicked(id);
  }

  function classOfElement(el) {
    const classes = ['cell'];
    if (el.isGuessed) {
      classes.push('guessed');
    }

    if (!el.isVisible && !el.isGuessed && !DEBUG_showAll) {
      classes.push('closed');
    }

    return classes.join(' ');
  }

  function renderElement(el) {
    return (
      <div
        key={el.id}
        className={classOfElement(el)}
        onClick={() => clickOnElement(el)}
      >
        {(el.isGuessed || el.isVisible || DEBUG_showAll) && el.character}
      </div>
    );
  }

  function formatTime(time) {
    console.log(time);
    const m = Math.floor(time / 60000).toString().padStart(2, '0');
    const s = Math.floor((time % 60000) / 1000).toString().padStart(2, '0');
    return `${m}:${s}`;
  }

  return (
    <div>
      <div className="menu">
        <div className="menu-text">czas gry</div>
        <div className="menu-greyed">{formatTime(time)}</div>

        <div className="menu-text">liczba ruchów</div>
        <div className="menu-greyed">{playAmounts}</div>

        <div className="menu-text">Przyciski sterujące</div>
        {isStarted && <button onClick={stopGame}>Stop</button>}
        {!isStarted && <button onClick={startGame}>Start</button>}
      </div>

      <div className="stage">{isStarted && stage.map(renderElement)}</div>
    </div>
  );
};
