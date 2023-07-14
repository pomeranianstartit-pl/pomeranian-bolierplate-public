import React, { useState, useEffect } from 'react';
import formatTime from './FormatTime';

export const MemoGameBoard2 = ({
  gameTime,
  setGameStart,
  boardSize,
  score,
  setScore,
  setFinalSettings,
}) => {
  const [memoArray, setMemoArray] = useState([]);
  const [firstClickedCard, setFirstClickedCard] = useState(null);
  const [secondClickedCard, setSecondClickedCard] = useState(null);

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
        character: symbol,
        isGuessed: false,
        isVisible: false,
      });
    }
    let shuffledCards = [];
    for (let i = 0; i < boardSize; i++) {
      shuffledCards.push({
        ...memoCardsSymbols[i % (boardSize / 2)],
        id: i + 1,
      });
    }
    shuffledCards = shuffledCards.sort(() => Math.random() - 0.5);
    setMemoArray(shuffledCards);
  };

  const revealCard = (card) => {
    if (card.id === firstClickedCard || card.isGuessed) return;
    if (firstClickedCard === null) {
      setFirstClickedCard(card.id);
      return;
    }

    if (secondClickedCard === null) {
      setSecondClickedCard(card.id);
      setScore(score + 1);
    }
  };

  useEffect(() => {
    const first = memoArray.find((card) => card.id === firstClickedCard);
    const second = memoArray.find((card) => card.id === secondClickedCard);
    let timeout;

    setMemoArray((prevMemoArray) =>
      prevMemoArray.map((card) => {
        const cardCopy = { ...card };
        if (cardCopy.id === first?.id || cardCopy.id === second?.id) {
          cardCopy.isVisible = true;
          cardCopy.isGuessed =
            cardCopy.isGuessed || first?.character === second?.character;
        } else {
          cardCopy.isVisible = false;
        }
        return cardCopy;
      })
    );

    if (firstClickedCard !== null && secondClickedCard !== null) {
      timeout = setTimeout(() => {
        setFirstClickedCard(null);
        setSecondClickedCard(null);
      }, 1000);
    }

    return () => clearTimeout(timeout);
  }, [firstClickedCard, secondClickedCard]);

  useEffect(() => {
    const matchedCards = memoArray.filter((card) => card.isGuessed);
    setTimeout(() => {
      if (matchedCards.length === boardSize) {
        setGameStart(false);
        setFinalSettings(boardSize);
      }
    }, 500);
  }, [memoArray, boardSize, setGameStart, setFinalSettings]);

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
      <div className="memoGame">
        {memoArray.map((card) => (
          <div key={card.id} onClick={() => revealCard(card)}>
            <div id={card.isGuessed ? 'squerTrue' : 'squerFalse'}>
              {(card.isGuessed || card.isVisible) && card.character}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
