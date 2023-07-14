import React, { useEffect, useState } from 'react';
import './style.css';
import { MemoSettings } from './MemoSettings';
import { MemoBoard } from './MemoBoard';

export function MemoGame() {
  const defaultBoardSize = 16;
  const [boardSize, setBoardSize] = useState(defaultBoardSize);
  const [gameStart, setGameStart] = useState(false);
  const [gameTime, setGameTime] = useState(0);
  const [score, setScore] = useState(0);
  const [finalSettings, setFinalSettings] = useState('');

  useEffect(() => {
    let intervalId;

    if (gameStart) {
      intervalId = setInterval(() => {
        setGameTime((prevGameTime) => prevGameTime + 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [gameStart, gameTime]);

  return (
    <>
      {!gameStart && (
        <MemoSettings
          boardSize={boardSize}
          setBoardSize={setBoardSize}
          setGameStart={setGameStart}
          score={score}
          gameTime={gameTime}
          finalSettings={finalSettings}
          setScore={setScore}
          setGameTime={setGameTime}
        />
      )}

      {gameStart && (
        <MemoBoard
          gameTime={gameTime}
          setGameStart={setGameStart}
          boardSize={boardSize}
          score={score}
          setScore={setScore}
          setFinalSettings={setFinalSettings}
        />
      )}
    </>
  );
}
