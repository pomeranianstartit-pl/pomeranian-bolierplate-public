import React, { useState, useEffect } from 'react';
import MoleGameSettings from './Settings.jsx';
import './styles.css';
import MoleGameBoard from './Board';

export const HitTheMoleGame = () => {
  const defaultGameTime = 2 * 60 * 1000;
  const moleSpeed = 1000;
  const [moleCount, setMoleCount] = useState(1);
  const [gameTime, setGameTime] = useState(defaultGameTime / 1000);
  const [seconds, setSeconds] = useState(gameTime / 1000);
  const [scoreCount, setScoreCount] = useState(0);
  const [moleArray, setMoleArray] = useState(
    Array(10).fill({ isVisible: false, isWhacked: false })
  );

  useEffect(() => {
    let intervalId;

    if (!intervalId) {
      intervalId = setInterval(() => {
        setSeconds(seconds - 1);
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [gameTime]);

  useEffect(() => {
    let intervalId;

    if (!intervalId) {
      intervalId = setInterval(() => {
        showRandomMole();
      }, moleSpeed);

      return () => clearInterval(intervalId);
    }
  }, [gameTime]);

  function hitTheMole(index) {
    if (moleArray[index].isVisible) {
      setScoreCount(scoreCount + 1);

      setMoleArray((prevVal) => {
        const newArray = [...prevVal];

        newArray[index].isVisible = false;

        return newArray;
      });
    }
  }

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

        return newMole;
      })
    );
  }

  return (
    <>
      <MoleGameSettings
        gameTime={gameTime}
        moleCount={moleCount}
        setGameTime={setGameTime}
        setMoleCount={setMoleCount}
      />
      <MoleGameBoard
        moleArray={moleArray}
        hitTheMole={hitTheMole}
        scoreCount={scoreCount}
      />
    </>
  );
};
