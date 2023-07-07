import React, { useEffect, useState } from 'react';
import { MoleGameSettings } from './MoleGameSettings';
import { MoleGameBoard } from './MoleGameBoard';
import './styles.css';


function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


export function Mole({ onClick }) {
  const [moleArray, setMoleArray] = useState(
    Array(2 * 8).fill({ isVisible: false, isWhacked: false, isRotating: false })
  );
  const [isGameStarted, setIsGameStarted] = useState(false);
  const defaultGameTime = 2 * 60 * 1000;
  const [score, setScore] = useState(0);

  const showRandomMole = () => {
  const random = getRandom(0, moleArray.length - 1);

  setMoleArray((previousMoleArray) =>
    previousMoleArray.map((mole, index) => {
      const newMole = { ...mole };
      newMole.isVisible = index === random;
      return newMole;
    })
  );
};

function hitTheMole(index) {
  if (!moleArray[index].isVisible) return;
  moleArray[index].isWhacked = !moleArray[index].isWhacked;
  console.log(moleArray[index].isWhacked);
}

  const startGame = (gameTime, moleCount) => {
    setIsGameStarted(true);
    setScore(0);

    const moleInterval = setInterval(() => {
      showRandomMole();
    }, 1000);

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

  function handleMoleClick(index) {
    if (!moleArray[index].isVisible || moleArray[index].isWhacked) return;
  
    const updatedMoleArray = [...moleArray];
    updatedMoleArray[index].isWhacked = true;
    updatedMoleArray[index].isRotating = true; // Ustawienie pola isRotating na true
    setMoleArray(updatedMoleArray);
  
    setScore((prevScore) => prevScore + 1);
  
    setTimeout(() => {
      const newMoleArray = [...moleArray];
      newMoleArray[index].isWhacked = false;
      newMoleArray[index].isRotating = false; // Ustawienie pola isRotating na false
      setMoleArray(newMoleArray);
    }, 1000);
    onClick(index);
  }

  const [selectedGameTime, setSelectedGameTime] = useState(defaultGameTime);

  useEffect(() => {
    if (isGameStarted) {
      const timer = setInterval(() => {
        setSelectedGameTime((prevTime) => prevTime - 1000);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [isGameStarted]);

<div onClick={handleMoleClick}></div>

return (
<>
     
      <MoleGameSettings moleArray={moleArray} onStartGame={startGame} />
      <p className='score'>WYNIK: {score}</p>
      {isGameStarted && (

<>

      <MoleGameBoard moleArray={moleArray} onMoleClick={handleMoleClick} />
      </>
      )}
    </>
  );
}