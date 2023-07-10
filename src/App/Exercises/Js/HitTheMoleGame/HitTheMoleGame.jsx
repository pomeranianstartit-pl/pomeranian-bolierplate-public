import React, { useState, useEffect } from 'react';
import MoleGameSettings from './Settings.jsx';
import './styles.css';
import MoleGameBoard from './Board';

export const HitTheMoleGame = () => {
  const defaultGameTime = 1 * 60 * 1000;
  const moleSpeed = 1000;
  const defaultArrayState = Array(10).fill({
    isVisible: false,
    isWhacked: false,
  });
  const [moleCount, setMoleCount] = useState(1);
  const [gameTime, setGameTime] = useState(defaultGameTime / 1000);
  const [scoreCount, setScoreCount] = useState(0);
  const [moleArray, setMoleArray] = useState(defaultArrayState);
  const [gameStarted, setGameStarted] = useState(false);
  const [timer, setTimer] = useState(gameTime);

  useEffect(() => {
    setMoleArray(defaultArrayState);
  }, [moleCount]);

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
  }, [timer]);

  useEffect(() => {
    let intervalId;

    if (gameStarted) {
      intervalId = setInterval(showRandomMole, moleSpeed);
    }

    return () => clearInterval(intervalId);
  }, [gameStarted]);

  useEffect(() => {
    if (gameStarted && scoreCount === 3) {
      // score value to edit: 20
      setGameStarted(false);
    }
  }, [scoreCount, gameStarted]);

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

  const startStopGame = () => {
    setGameStarted((prevValue) => !prevValue);
    setScoreCount(0);
  };

  const restartGame = () => {
    setTimer(gameTime);
    setGameStarted(false);
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
        startStopGame={startStopGame} //
        restartGame={restartGame}
      />
      <MoleGameBoard
        moleArray={moleArray}
        hitTheMole={hitTheMole}
        scoreCount={scoreCount}
        gameStarted={gameStarted}
        timer={timer}
      />
    </>
  );
};
