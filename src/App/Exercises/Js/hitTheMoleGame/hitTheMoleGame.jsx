import './styles.css';
import React, { useState, useEffect } from 'react';
import { MoleGameBoard } from './MoleGameBoard';
import { MoleGameSettings } from './MoleGameSettings';

export const HitTheMoleGame = () => {
  const moleSpeed = 1000;
  const defaultGameTime = 2 * 60;
  const [moleArray, setMoleArray] = useState(
    Array(10).fill({ isVisible: false, isWhacked: false })
  );
  const [gameTime, setGameTime] = useState(defaultGameTime);
  const [moleCount, setMoleCount] = useState(1);
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [counter, setCounter] = useState(gameTime);

  useEffect(() => {
    let countdownInterval;

    if (!countdownInterval) {
      countdownInterval = setInterval(() => {
        setCounter((previousCounter) => previousCounter - 1);
      }, 1000);
      if (counter === 0) {
        setGameStarted(false);
        clearInterval(countdownInterval);
      }
      console.log(gameStarted);
      console.log(counter);
      return () => clearInterval(countdownInterval);
    }
    //daj else if wyświetlający podsumowanie
  }, [counter]);
  useEffect(() => {
    setCounter(() => gameTime);
  }, [gameTime]);

  useEffect(() => {
    if (gameTime !== 0) {
      const countdownInterval = setInterval(() => {
        showRandomMole();
      }, moleSpeed);

      return () => clearInterval(countdownInterval);
    }
  }, [gameTime]);

  useEffect(() => {
    if (!gameStarted || gameStarted) setCounter(gameTime);
  }, [gameStarted, gameTime]);

  function showRandomMole() {
    function getRandom(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
    const random = getRandom(0, moleArray.length - 1);
    setMoleArray((previousMoleArray) =>
      previousMoleArray.map((mole, index) => {
        const newMole = { ...mole };
        newMole.isVisible = index === random;
        // console.log(moleArray);
        return newMole;
      })
    );
  }
  //random 1,2,3 moles
  function showRandomMoles() {
    function getRandom(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
    const randomArray = Array(moleArray.length)
      .fill()
      .map((_, i) => i + 1)
      .sort(() => Math.random() - 0.5);
  }

  function hitTheMole(index) {
    if (moleArray[index].isVisible) {
      setScore(score + 1);
      setMoleArray((prevVal) => {
        const newArray = [...prevVal];
        newArray[index].isVisible = false;
        return newArray;
      });
    }
  }

  return (
    <>
      {!gameStarted ? (
        <MoleGameSettings
          gameTime={gameTime}
          setGameTime={setGameTime}
          moleCount={moleCount}
          setMoleCount={setMoleCount}
          startStopGame={() => setGameStarted((prev) => !prev)}
          gameStarted={gameStarted}
        />
      ) : null}
      <p>WYNIK: {score}</p>

      {gameStarted ? (
        <MoleGameBoard
          moleArray={moleArray}
          hitTheMole={hitTheMole}
          score={score}
          setScore={setScore}
          counter={counter}
          setCounter={setCounter}
          startStopGame={() => setGameStarted((prev) => !prev)}
          gameStarted={gameStarted}
        />
      ) : null}
    </>
  );
};
