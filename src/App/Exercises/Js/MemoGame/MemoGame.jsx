import React, { useEffect, useState } from 'react';
import { MemoGameSettings } from './MemoGameSettings';
import { MemoGameBoard } from './MemoGameBoard';
import './styles.css';

export function Memo({ onClick }) {
  const [memoArray, setMemoArray] = useState(() =>
    Array(8).fill().map(() => ({ isVisible: false, isWhacked: false }))
  );
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [selectedMemoCount, setSelectedMemoCount] = useState(8);
  const [restart, setRestart] = useState(false);
  const [memoInterval, setMemoInterval] = useState(null);

  const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const showRandomMemo = () => {
    const newArray = Array(selectedMemoCount).fill({ isVisible: false, isWhacked: false });
    const randomIndex = getRandom(0, selectedMemoCount - 1);
    newArray[randomIndex] = { isVisible: true, isWhacked: false };
    setMemoArray(newArray);
  };

  const hitTheMemo = (index) => {
    if (!memoArray[index].isVisible) return;

    setMemoArray((previousMemoArray) =>
      previousMemoArray.map((memo, memoIndex) => ({
        ...memo,
        isWhacked: memoIndex === index ? !memo.isWhacked : memo.isWhacked,
      }))
    );
  };

  const startGame = (memoCount) => {
    setIsGameStarted(true);
    setScore(0);
    setRestart(false);
    setSelectedMemoCount(memoCount);

    if (memoInterval) {
      clearInterval(memoInterval);
    }

    const interval = setInterval(showRandomMemo, 1000);
    setMemoInterval(interval);
  };

  const handleMemoClick = (index) => {
    if (!memoArray[index].isVisible || memoArray[index].isWhacked) return;

    setMemoArray((previousMemoArray) =>
      previousMemoArray.map((memo, memoIndex) => ({
        ...memo,
        isWhacked: memoIndex === index ? true : memo.isWhacked,
      }))
    );

    setScore((prevScore) => prevScore + 1);

    setTimeout(() => {
      const random = getRandom(0, memoArray.length - 1);

      setMemoArray((previousMemoArray) =>
        previousMemoArray.map((memo, index) => ({
          ...memo,
          isVisible: index === random,
        }))
      );
    }, 100);

    onClick(index);
  };

  const handleRestart = () => {
    setRestart(true);
    setScore(0);
    setSelectedMemoCount(8);
  };

  useEffect(() => {
    if (isGameStarted) {
      const timer = setInterval(() => {
        setSelectedMemoCount((prevTime) => prevTime - 1000);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [isGameStarted]);

  useEffect(() => {
    if (restart) {
      clearInterval(memoInterval);
      setMemoArray(Array(8).fill({ isVisible: false, isWhacked: false }));
      setIsGameStarted(false);
      setRestart(false);
    }
  }, [restart]);

  return (
    <>
      <MemoGameSettings
        memoArray={memoArray}
        onStartGame={startGame}
        onRestart={handleRestart}
      />
      <p className="score">WYNIK: {score}</p>
      {isGameStarted && (
        <MemoGameBoard
          memoArray={memoArray}
          onMemoClick={handleMemoClick}
          selectedMemoCount={selectedMemoCount}
        />
      )}
    </>
  );
}

