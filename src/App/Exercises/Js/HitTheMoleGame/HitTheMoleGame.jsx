import React, { useState, useEffect } from 'react';
import './style.css';
import { MoleGameSettings } from './MoleGameSettings';
import { MoleGameBoard } from './Board';

export function HitTheMoleGame() {
  const defaultGameTime = 2 * 60 * 1000;
  const [gameTime, setGameTime] = useState(defaultGameTime);
  const [moleCount, setMoleCount] = useState(1);
  const [seconds, setSeconds] = useState(gameTime / 1000);
  const [isCountingDown, setIsCountingDown] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [startTime, setStartTime] = useState(gameTime);
  const [moleArray, setMoleArray] = useState(
    Array(10).fill({ isVisible: false, isWhacked: false })
  );

  useEffect(() => {
    let intervalId;

    if (isCountingDown) {
      intervalId = setInterval(() => {
        setSeconds((prevSeconds) => (prevSeconds > 0 ? prevSeconds - 1 : 0));
      }, 1000);
    }

    if (seconds === 0) {
      clearInterval(intervalId);
      setIsCountingDown(false);
      setSeconds(startTime / 1000);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [isCountingDown, seconds, startTime]);

  const generatMole = (moleCount) => {
    let indexMoleRandomArry = [];
    for (let i = 0; i < moleCount; i++) {
      const rand = Math.floor(Math.random() * 10);
      if (indexMoleRandomArry.includes(rand)) {
        --i;
        console.log(`${indexMoleRandomArry} oraz i wynosi ${i}`);
      } else {
        indexMoleRandomArry.push(rand);
      }
    }

    setMoleArray((prevMoleArray) =>
      prevMoleArray.map((mole, index) => ({
        ...mole,
        isVisible: indexMoleRandomArry.includes(index),
      }))
    );
  };

  useEffect(() => {
    let intervalId;

    if (isCountingDown) {
      intervalId = setInterval(() => {
        generatMole(moleCount);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isCountingDown, moleCount]);

  const hitTheMole = (index) => {
    if (moleArray[index].isVisible) {
      setScore((prevScore) => prevScore + 1);
      setMoleArray((prevMoleArray) =>
        prevMoleArray.map((mole, idx) =>
          idx === index ? { ...mole, isVisible: false } : mole
        )
      );
    }
  };
  useEffect(() => {
    if (score > highScore) {
      setHighScore(score);
    }
  }, [highScore, score]);
  return (
    <>
      {!isCountingDown ? (
        <MoleGameSettings
          seconds={seconds}
          setSeconds={setSeconds}
          moleCount={moleCount}
          setMoleCount={setMoleCount}
          isCountingDown={isCountingDown}
          setIsCountingDown={setIsCountingDown}
          gameTime={gameTime}
          setGameTime={setGameTime}
          score={score}
          hightScore={highScore}
          setScore={setScore}
          setStartTime={setStartTime}
        />
      ) : null}
      {isCountingDown ? (
        <MoleGameBoard
          score={score}
          hitTheMole={hitTheMole}
          moleArray={moleArray}
          seconds={seconds}
          setIsCountingDown={setIsCountingDown}
          setSeconds={setSeconds}
          isCountingDown={isCountingDown}
          gameTime={gameTime}
          startTime={startTime}
        />
      ) : null}
    </>
  );
}
