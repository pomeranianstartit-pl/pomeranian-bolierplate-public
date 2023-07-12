import React, { useState, useEffect } from 'react';
import './styles.css';
import MemoGameSettings from './MemoGameSettings';
import MemoBoard from './MemoBoard';

const alphabet = [

  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',

];

const getRandomLetters = (amount) => {
const shuffled = [...alphabet].sort(() => 0.5 - Math.random());
return shuffled.slice(0, amount);
};

function createStageElement(character, index) {

  return { character, id: index, isGuessed: false, isVisible: false };

}

export function MemoGame() {
  const [scoreCount, setScoreCount] = useState(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [boardSizeOptions, setBoardSizeOptions] = useState([
    { label: '8 elementów', boardSizeValue: 8, checked: true },
    { label: '16 elementów', boardSizeValue: 16, checked: false },
    { label: '20 elementów', boardSizeValue: 20, checked: false },
  ]);
  const [gameArray, setGameArray] = useState(
    Array(
      boardSizeOptions.find((option) => option.checked).boardSizeValue
    ).fill('A')
  );

  const [clicks, setClicks] = useState(0);
  const [time, setTime] = useState(0);

  const letters = getRandomLetters(gameArray);
  const stage = [...letters, ...letters].map((letter, index) =>
    createStageElement(letter, index)
  );

  useEffect(() => {
    let interval;
    if (!interval && gameStarted) {
      interval = setInterval(() => {
        setTime((prevCountdown) => prevCountdown + 1);
      }, 1000);
    }
    if (time === 60) {
      setGameStarted(false);
    }
    return () => {
      clearInterval(interval);
    };
  }, [gameStarted, time]);

  useEffect(() => {
    setGameArray(
      Array(
        boardSizeOptions.find((option) => option.checked).boardSizeValue
      ).fill('A')
    );
  }, [boardSizeOptions]);

  function handleCellClick() {
    setClicks((prevValue) => prevValue + 1);
  }

  return (
    <>
      <p>
        Gra polegająca na zapamiętywaniu odkrytych kafli i łączeniu ich w pary
      </p>
      
      <MemoGameSettings
        startStopGame={() => {
          setGameStarted((prev) => !prev);
          setScoreCount(0);
          setTime(0);
          setClicks(0);
          getRandomLetters();
        }}
        gameStarted={gameStarted}
        gameArray={gameArray}
        setGameArray={setGameArray}
        boardSizeOptions={boardSizeOptions}
        setBoardSizeOptions={setBoardSizeOptions}
      />
      <Timer time={time} />
      <MoveCounter clicks={clicks} />
      <MemoBoard gameArray={gameArray} handleCellClick={handleCellClick} />
    </>
  );
}

const Timer = ({ time }) => {
  const formattedTime = new Date(time * 1000).toISOString().slice(14, 19);
  return <h4>CZAS GRY: {formattedTime}</h4>;
};

const MoveCounter = ({ clicks }) => {
  return <h4>LICZBA RUCHÓW: {clicks}</h4>;
};


