import './styles.css';
import React, { useState, useEffect } from 'react';
import { MoleGameBoard } from './MoleGameBoard';
import { MoleGameSettings } from './MoleGameSettings';

export const HitTheMoleGame = () => {
  const moleSpeed = 1000;
  const defaultGameTime = 2 * 60;
  const [moleArray, setMoleArray] = useState(
    Array(10).fill({ isVisible: false, isWhacked: false, isMissed: false })
  );
  const [gameTime, setGameTime] = useState(defaultGameTime);
  const [moleCount, setMoleCount] = useState(1);
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [counter, setCounter] = useState(gameTime);
  const backgroundColorDuration = 300;

  useEffect(() => {
    let countdownInterval;

    if (!countdownInterval) {
      countdownInterval = setInterval(() => {
        setCounter((previousCounter) => previousCounter - 1);
      }, moleSpeed);
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
    setMoleCount(() => moleCount);
  }, [moleCount]);

  useEffect(() => {
    if (gameStarted && counter > 0) {
      showRandomMoles();
    }
  }, [gameStarted, counter]);

  useEffect(() => {
    if (gameStarted) setCounter(gameTime);
  }, [gameStarted, gameTime]);

  //random 1,2,3 moles
  function showRandomMoles() {
    function getRandom(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const randomArray = Array(moleCount)
      .fill(1)
      .reduce((accumulator, currentValue, index) => {
        let newNumber = getRandom(0, 9);

        while (accumulator.includes(newNumber)) {
          newNumber = getRandom(0, 9);
        }
        return [...accumulator, newNumber];
      }, []);
    console.log(moleCount);
    console.log(randomArray);

    setMoleArray((previousMoleArray) =>
      previousMoleArray.map((mole, index) => {
        const newMole = { ...mole };
        newMole.isVisible = randomArray.includes(index);

        return newMole;
      })
    );
    console.log(moleArray);
  }

  function hitTheMole(index) {
    if (moleArray[index].isVisible) {
      setScore(score + 1);
      setMoleArray((prevVal) => {
        const newArray = [...prevVal];
        newArray[index].isWhacked = true;
        return newArray;
      });
    } else if (!moleArray[index].isVisible) {
      setMoleArray((prevVal) => {
        const newArray = [...prevVal];
        newArray[index].isMissed = true;
        return newArray;
      });
    }
    // debugger;
    setTimeout(() => {
      setMoleArray((prevVal) => {
        const newArray = [...prevVal];
        newArray[index].isWhacked = false;
        newArray[index].isVisible = false;
        newArray[index].isMissed = false;
        return newArray;
      });
    }, backgroundColorDuration);
  }
  return (
    <>
      <button onClick={() => showRandomMoles()}>TEST ARRAYKI</button>
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
