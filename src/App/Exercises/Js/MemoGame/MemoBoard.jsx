//            KOD MA PROBLEMY Z DZIAŁANIEM DOKŁADNIE W FUNKCJI onBoxClick TABLICA NIE JEST AKTUALIZOWANA NA CZAS PRZEZ CO FUNKCJA MA PROBLEMY Z DZIAŁANIEM POPRAWIONY KOD W WERSJI 3 Z KODU ADAMA ZNAJDUJE SIĘ W MemoGameBoard.jsx a funkcja się nazywa MemoGameBoard2

/*import React, { useState, useEffect, useCallback } from 'react';
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
  const [visibleIndexArray, setVisableIndexArray] = useState([]);
  const [playerMove, setPlayerMove] = useState(0);
  const [numberOfPair, setNumberOfPair] = useState(0);
  console.log(visibleIndexArray);
  useEffect(() => {
    generateMemoArray();
  }, [boardSize, generateMemoArray]);

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

  const onBoxClick = (index, visibleIndexArray) => {
    const prevVisible = [...visibleIndexArray];
    if (playerMove === 0 || playerMove === 1) setPlayerMove((move) => move + 1);
    else return;
    const elementVisible = visibleIndexArray.includes(index);

    if (!elementVisible) {
      setVisableIndexArray((prevVisibleIndexArray) => [
        ...prevVisibleIndexArray,
        index,
      ]);
      setMemoArray((prevMemoArray) => {
        const updatedMemoArray = [...prevMemoArray];
        updatedMemoArray[index] = {
          ...updatedMemoArray[index],
          isVisableLetteer: true,
        };
        return updatedMemoArray;
      });
    }

    console.log(visibleIndexArray);
    console.log(memoArray[visibleIndexArray[visibleIndexArray.length - 2]]);
    console.log(memoArray[visibleIndexArray[visibleIndexArray.length - 1]]);
    if (playerMove === 2) {
      if (
        memoArray[visibleIndexArray[visibleIndexArray.length - 2]].symbol ===
        memoArray[visibleIndexArray[visibleIndexArray.length - 1]].symbol
      ) {
        setMemoArray((prevMemoArray) =>
          prevMemoArray.map((memo, index) => ({
            ...memo,
            isMatched: true,
          }))
        );
        setNumberOfPair(numberOfPair + 1);
        setPlayerMove(0);
      } else {
        debugger;
        setTimeout(() => {
          setMemoArray((prevMemoArray) =>
            prevMemoArray.map((memo, index) => ({
              ...memo,
              isVisableLetteer: false,
            }))
          );
          setPlayerMove(0);
          setVisableIndexArray(prevVisible);
        }, 1000);
      }
    }
  };
  const memoizedOnBoxClick = useCallback(
    (id) => onBoxClick(id, visibleIndexArray),

    [visibleIndexArray]
  );
  // Sprawdzamy czy wszystkie pary są odkryte jak tak to gameStart ustawiamy na false
  if (numberOfPair === boardSize / 2) setGameStart(false);

  return (
    <>
      <p>number of pair {numberOfPair}</p>
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
            <span onClick={() => {memoizedOnBoxClick(index); setScore(score + 1)}}>
              <div id="squerFalse">{memo.isVisableLetteer && memo.symbol}</div>
            </span>
          </div>
        ))}
      </div>
      <p>{visibleIndexArray}</p>
    </>
  );
};*/
