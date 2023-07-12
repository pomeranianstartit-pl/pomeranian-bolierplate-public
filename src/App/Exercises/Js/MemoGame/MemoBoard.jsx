import React, { useState, useEffect } from 'react';
import formatTime from '../HitTheMoleGame/FormatTime';

export const MemoBoard = ({
  gameTime,
  setGameStart,
  boardSize,
  score,
  setScore,
  setFinalSettings,
}) => {
  const [memoArray, setMemoArray] = useState([]);
  const [visibleIndexArray, setVisibleIndexArray] = useState([]);
  const [playerMove, setPlayerMove] = useState(0);

  useEffect(() => {
    generateMemoArray();
  }, [boardSize]);

  const generateMemoArray = () => {
    const memoSymbols = 'ABCDEFGHIJKLMNOPRSTUWXYZ';
    const memoCardsSymbols = [];
    const usedSymbols = [];
    for (let i = 0; i < boardSize / 2; i++) {
      let symbol;
      do {
        const index = Math.floor(Math.random() * memoSymbols.length);
        symbol = memoSymbols.charAt(index);
      } while (usedSymbols.includes(symbol));
      usedSymbols.push(symbol);
      memoCardsSymbols.push({
        symbol: symbol,
        isVisableLetteer: false,
        isVisibleBox: true,
        isMatched: false, // Dodane pole informujące o dopasowaniu kafelka
      });
    }
    let shuffledCards = [];
    for (let i = 0; i < boardSize / 2; i++) {
      shuffledCards.push(memoCardsSymbols[i]);
      shuffledCards.push(memoCardsSymbols[i]);
    }
    shuffledCards = shuffledCards.sort(() => Math.random() - 0.5);
    setMemoArray(shuffledCards);
  };

  const onBoxClick = (index) => {
    if (!visibleIndexArray.includes(index)) {
      setVisibleIndexArray((prevVisibleIndexArray) => [
        ...prevVisibleIndexArray,
        index,
      ]);
      setPlayerMove((prevPlayerMove) => prevPlayerMove + 1);
      setMemoArray((prevMemoArray) => {
        const updatedMemoArray = [...prevMemoArray];
        updatedMemoArray[index] = {
          ...updatedMemoArray[index],
          isVisableLetteer: true,
        };
        return updatedMemoArray;
      });

      if (playerMove === 1) {
        const visibleIndexes = visibleIndexArray.concat(index);
        const firstIndex = visibleIndexes[0];
        const secondIndex = visibleIndexes[1];
        if (
          firstIndex !== undefined &&
          secondIndex !== undefined &&
          memoArray[firstIndex].symbol === memoArray[secondIndex].symbol
        ) {
          console.log('Dopasowane kafelki:', firstIndex, secondIndex);
          setMemoArray((prevMemoArray) =>
            prevMemoArray.map((memo, index) => ({
              ...memo,
              isMatched: true,
            }))
          );
        } else {
          console.log('Nieudane dopasowanie kafelków:', firstIndex, secondIndex);
          setTimeout(() => {
            setMemoArray((prevMemoArray) =>
              prevMemoArray.map((memo, index) => ({
                ...memo,
                isVisableLetteer: false,
              }))
            );
          }, 1000);
        }
        setPlayerMove(0);
        setVisibleIndexArray([]);
      }
    }
  };

  return (
    <>
      <div className="container">
        <h2 className="item">CZAS GRY: </h2>
        <h2 className="timeAndScore">{formatTime(gameTime)}</h2>
        <h2 className="item">LICZBA RUCHÓW:</h2>
        <h2 className="timeAndScore">{score}</h2>
        <h2 className="item">PRZYCISKI STERUJĄCE</h2>
        <div className="stopBottom">
          <button
            onClick={() => {
              setGameStart(false);
              setFinalSettings(boardSize);
            }}
          >
            STOP
          </button>
        </div>
      </div>
      <p>{visibleIndexArray}</p>
      <div className="memoGame">
        {memoArray.map((memo, index) => (
          <div key={index}>
            <span onClick={() => onBoxClick(index)}>
              {memo.isVisibleBox && (
                <div id={memo.isMatched ? "squerTrue ": "squerFalse"}>
                  {memo.isVisableLetteer && memo.symbol}
                </div>
              )}
            </span>
          </div>
        ))}
      </div>
      <p>{visibleIndexArray}</p>
    </>
  );
};
