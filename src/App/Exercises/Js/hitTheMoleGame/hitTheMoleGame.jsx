import './styles.css';
import React, { useState, useEffect } from 'react';
import { MoleGameBoard } from './MoleGameBoard';
import { MoleGameSettings } from './MoleGameSettings';

export const HitTheMoleGame = () => {
  const defaultGameTime = 2 * 60 * 1000;
  const [moleArray, setMoleArray] = useState(
    Array(10).fill({ isVisible: false, isWhacked: false })
  );
  const [gameTime, setGameTime] = useState(defaultGameTime / 1000);
  const [moleCount, setMoleCount] = useState(1);
  const [scoreCount, setScoreCount] = useState(0);

  const startTimer = () => {};

  useEffect(() => {
    if (gameTime !== 0) {
      const countdownInterval = setInterval(() => {
        setGameTime((previousgameTime) => previousgameTime - 1);
      }, 1000);
      console.log(gameTime);
      return () => clearInterval(countdownInterval);
    }
  }, [gameTime]);

  function hitTheMole(index) {
    console.log(moleArray[index].isWhacked);
    if (!moleArray[index].isVisible) return;
    moleArray[index].isWhacked = !moleArray[index].isWhacked;
    console.log(moleArray[index].isWhacked);
  }

  return (
    <>
      <MoleGameSettings
        gameTime={gameTime}
        setGameTime={setGameTime}
        moleCount={moleCount}
        setMoleCount={setMoleCount}
      />
      <MoleGameBoard
        moleArray={moleArray}
        hitTheMole={hitTheMole}
        scoreCount={scoreCount}
        setScoreCount={setScoreCount}
      />
      {/* przekazanie propsów do komponentu */}
    </>
  );
};
