import React, { useState, useEffect } from 'react';
import MoleGameSettings from './Settings.jsx';
import './styles.css';
import MoleGameBoard from './Board';
import formatTime from './Time.jsx';

export const HitTheMoleGame = () => {
  const defaultGameTime = 1 * 60 * 1000;
  const [gameTime, setGameTime] = useState(defaultGameTime / 1000);
  const [timer, setTimer] = useState(gameTime);
  const defaultArrayState = Array(10).fill({
    isVisible: false,
    isWhacked: false,
  });
  const [gameStarted, setGameStarted] = useState(false);
  const [moleArray, setMoleArray] = useState(defaultArrayState);
  const [moleCount, setMoleCount] = useState(1);
  const moleSpeed = 1000;
  const [scoreCount, setScoreCount] = useState(0);
  const [winTime, setWinTime] = useState(null);

  useEffect(() => {
    setMoleArray(defaultArrayState);
  }, [moleCount]);

  useEffect(() => {
    setTimer(gameTime);
  }, [gameTime]);

  useEffect(() => {
    let interval;
    if (!interval) {
      interval = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer === 0) {
            clearInterval(interval);
            setGameStarted(false);
          }
          return prevTimer - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [timer, gameStarted]);

  useEffect(() => {
    let intervalId;

    if (gameStarted) {
      intervalId = setInterval(showRandomMole, moleSpeed);
    }

    return () => clearInterval(intervalId);
  }, [gameStarted]);

  useEffect(() => {
    if (gameStarted && scoreCount === 20) {
      setTimer(gameTime);
      setGameStarted(false);
      setWinTime(gameTime - timer);
    }
  }, [scoreCount, gameStarted, gameTime, timer]);

  const hitTheMole = (index) => {
    if (moleArray[index].isVisible) {
      setScoreCount((prevScore) => prevScore + 1);

      setMoleArray((prevVal) => {
        const newArray = [...prevVal];

        newArray[index].isVisible = false;

        return newArray;
      });
    }
  };

  const showRandomMole = () => {
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
  };

  const startGame = () => {
    setGameStarted(true);
    setScoreCount(0);
    setTimer(gameTime);
  };

  const restartGame = () => {
    setGameStarted(false);
    setTimer(defaultGameTime / 1000);
    setMoleCount(1);
    setScoreCount(0);
    setMoleArray(defaultArrayState);
  };

  return (
    <>
      <MoleGameSettings
        gameTime={gameTime}
        setGameTime={setGameTime}
        timer={timer}
        moleCount={moleCount}
        setMoleCount={setMoleCount}
        gameStarted={gameStarted}
        startGame={startGame}
        restartGame={restartGame}
        scoreCount={scoreCount}
        formatTime={formatTime}
        winTime={winTime}
      />
      <MoleGameBoard
        moleArray={moleArray}
        hitTheMole={hitTheMole}
        scoreCount={scoreCount}
        gameStarted={gameStarted}
        timer={timer}
        restartGame={restartGame}
      />
    </>
  );
};
