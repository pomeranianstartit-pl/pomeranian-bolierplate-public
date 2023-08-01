import './styles.css';    
import React, { useState, useEffect } from 'react';
import { MemoGameSettings } from './MemoGameSettings.jsx';
import { MemoGameBoard } from './MemoGameBoard.jsx';

   
  export const MemoGame = () => {
    const deafaultBoardSize = 16;
    const [time, setTime] = useState(0);
    const [boardSize, setBoardSize] = useState(deafaultBoardSize);
    const [score, setScore] = useState(0);
    const [gameStarted, setGameStarted] = useState(false);
    const [finalSettings, setFinalSettings] = useState('');
   

    useEffect(() => {
      let intervalId;
  
      if (gameStarted) {
        intervalId = setInterval(() => {
          setTime((pervTime) => pervTime + 1);
        }, 1000);
      }
      return () => {
        clearInterval(intervalId);
      };
    }, [gameStarted, time]);
 

  return (
    <>
       {!gameStarted && (
        <MemoGameSettings
          boardSize={boardSize}
          setBoardSize={setBoardSize}
          setGameStarted={setGameStarted}
          score={score}
          time={time}
          finalSettings={finalSettings}
          setScore={setScore}
          setTime={setTime}
        />
      )}
  
      {gameStarted && (
        <MemoGameBoard
          time={time}
          setFinalSettings={setFinalSettings}
          score={score}
          setScore={setScore}
          setgameStarted={setGameStarted}
          boardSize={boardSize}
        />      
      )} 
    </>
  );
};
  


