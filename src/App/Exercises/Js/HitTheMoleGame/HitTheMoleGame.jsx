import React, { useEffect, useState } from 'react';
import { MoleGameSettings } from './MoleGameSettings';
import { MoleGameBoard } from './MoleGameBoard';
import './styles.css';

export function Mole({ onClick }) {
  const [moleArray, setMoleArray] = useState(Array(2 * 8).fill({ isVisible: false, isWhacked: false }));
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [selectedGameTime, setSelectedGameTime] = useState(2 * 60 * 1000);
  const [restart, setRestart] = useState(false);
  const [moleInterval, setMoleInterval] = useState(null);

  const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const showRandomMole = () => {
    const random = getRandom(0, moleArray.length - 1);

    setMoleArray((previousMoleArray) =>
      previousMoleArray.map((mole, index) => ({
        ...mole,
        isVisible: index === random,
      }))
    );
  };

  const hitTheMole = (index) => {
    if (!moleArray[index].isVisible) return;

    setMoleArray((previousMoleArray) =>
      previousMoleArray.map((mole, moleIndex) => ({
        ...mole,
        isWhacked: moleIndex === index ? !mole.isWhacked : mole.isWhacked,
      }))
    );
  };

  const startGame = (gameTime, moleCount) => {
    setIsGameStarted(true);
    setScore(0);
    setRestart(false);

    if (moleInterval) {
      clearInterval(moleInterval);
    }

    const interval = setInterval(showRandomMole, 1000);
    setMoleInterval(interval);

    let remainingTime = gameTime;
    const countdownInterval = setInterval(() => {
      remainingTime -= 1000;
      if (remainingTime <= 0) {
        clearInterval(countdownInterval);
        clearInterval(moleInterval);
        setIsGameStarted(false);
      }
    }, 1000);
  };

  const handleMoleClick = (index) => {
    if (!moleArray[index].isVisible || moleArray[index].isWhacked) return;

    setMoleArray((previousMoleArray) =>
      previousMoleArray.map((mole, moleIndex) => ({
        ...mole,
        isWhacked: moleIndex === index ? true : mole.isWhacked,
      }))
    );

    setScore((prevScore) => prevScore + 1);

    setTimeout(() => {
      const random = getRandom(0, moleArray.length - 1);

      setMoleArray((previousMoleArray) =>
        previousMoleArray.map((mole, index) => ({
          ...mole,
          isVisible: index === random,
        }))
      );
    }, 100);

    onClick(index);
  };

  const handleRestart = () => {
    setRestart(true);
  };

  useEffect(() => {
    if (isGameStarted) {
      const timer = setInterval(() => {
        setSelectedGameTime((prevTime) => prevTime - 1000);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [isGameStarted]);

  useEffect(() => {
    if (restart) {
      clearInterval(moleInterval);
      setMoleArray(Array(2 * 8).fill({ isVisible: false, isWhacked: false }));
      setIsGameStarted(false);
      setSelectedGameTime(2 * 60 * 1000);
      setRestart(false);
    }
  }, [restart]);

  return (
    <>
      <MoleGameSettings moleArray={moleArray} onStartGame={startGame} onRestart={handleRestart} />
      <p className="score">WYNIK: {score}</p>
      {isGameStarted && <MoleGameBoard moleArray={moleArray} onMoleClick={handleMoleClick} />}
    </>
  );
}





