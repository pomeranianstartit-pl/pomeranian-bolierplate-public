import React, { useState, useEffect } from 'react';
import MoleGameSettings from './Settings.jsx';
import './styles.css';
import MoleGameBoard from './Board';

export const HitTheMoleGame = () => {
  const defaultGameTime = 1 * 60 * 1000;
  const moleSpeed = 1000;
  const [moleCount, setMoleCount] = useState(0);
  const [gameTime, setGameTime] = useState(0);
  const [scoreCount, setScoreCount] = useState(0);
  const [moleArray, setMoleArray] = useState([]);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [scoreReset, setScoreReset] = useState(false);
  const [gameEnded, setGameEnded] = useState(false);
  const [gameSettingsValid, setGameSettingsValid] = useState(false);

  useEffect(() => {
    setMoleArray(Array(10).fill({ isVisible: false, isWhacked: false }));
  }, [moleCount]);

  useEffect(() => {
    if (gameTime !== 0 && moleCount !== 0) {
      setGameSettingsValid(true);
    } else {
      setGameSettingsValid(false);
    }
  }, [gameTime, moleCount]);

  useEffect(() => {
    if (gameTime !== 0 && moleCount !== 0) {
      setGameEnded(false);
    }
  }, [gameTime, moleCount]);

  useEffect(() => {
    let interval;

    if (gameStarted) {
      interval = setInterval(() => {
        setGameTime((prevGameTime) => {
          if (prevGameTime === 0) {
            clearInterval(interval);
            setGameStarted(false);
            setGameOver(true);
            setScoreReset(true);
            setGameEnded(true);
          }
          return prevGameTime - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [gameStarted]);

  useEffect(() => {
    let intervalId;

    if (gameStarted) {
      intervalId = setInterval(showRandomMole, moleSpeed);
    }

    return () => clearInterval(intervalId);
  }, [moleArray, gameStarted]);

  useEffect(() => {
    if (gameStarted && scoreCount === 3) {
      setGameStarted(false);
      setGameOver(true);
      setScoreReset(true);
      setGameEnded(true);
    }
  }, [scoreCount, gameStarted]);

  const hitTheMole = (index) => {
    if (moleArray[index].isVisible && gameTime > 0 && gameStarted) {
      setScoreCount((prevScore) => prevScore + 1);

      setMoleArray((prevVal) => {
        const newArray = [...prevVal];

        newArray[index].isVisible = false;

        return newArray;
      });
    }
  };

  const showRandomMole = () => {
    if (gameStarted) {
      function getRandom(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
      }

      const randomIndices = [];

      while (randomIndices.length < moleCount) {
        const randomIndex = getRandom(0, moleArray.length - 1);
        if (!randomIndices.includes(randomIndex)) {
          randomIndices.push(randomIndex);
        }
      }

      setMoleArray((previousMoleArray) =>
        previousMoleArray.map((mole, index) => {
          const newMole = { ...mole };
          newMole.isVisible = randomIndices.includes(index);
          return newMole;
        })
      );
    }
  };

  const startStopGame = () => {
    if (!gameStarted && !gameEnded) {
      setGameStarted(true);
      setGameOver(false);
      if (gameTime === 0) {
        setScoreCount(0);
      }
      setScoreReset(false);
    } else if (!gameStarted && gameEnded) {
      restartGame();
    } else {
      setGameStarted(false);
    }
  };

  const restartGame = () => {
    if (gameSettingsValid) {
      setGameTime(defaultGameTime / 1000);
      setMoleCount(0);
      setScoreCount(0);
      setMoleArray(Array(10).fill({ isVisible: false, isWhacked: false }));
      setGameStarted(false);
      setGameOver(false);
      setScoreReset(false);
      setGameEnded(true);
    }
  };
  return (
    <>
      <MoleGameSettings
        gameTime={gameTime}
        moleCount={moleCount}
        setGameTime={setGameTime}
        setMoleCount={setMoleCount}
        restartGame={restartGame}
        gameStarted={gameStarted}
        startStopGame={startStopGame}
        gameSettingsValid={gameSettingsValid}
      />
      <MoleGameBoard
        moleArray={moleArray}
        hitTheMole={hitTheMole}
        scoreCount={scoreCount}
      />
    </>
  );
};
