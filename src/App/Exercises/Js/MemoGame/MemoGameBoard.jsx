import React, { useState, useEffect } from 'react';
import './styles.css';
import formatTime from './FormatTime';

export const MemoGameBoard = ({
  time,
  setGameStarted,
  setFinalSettings,
  score,
  setScore,
  boardSize,

}) => {

  const [memoArray, setMemoArray] = useState([]);
  const [firstClickedCard, setFirstClickedCard] = useState(null);
  const [secondClickedCard, setSecondClickedCard] = useState(null);


  useEffect(() => {
    symbolsArray();
}, [boardSize]);

const symbolsArray = () => {
  const memoSymbolsArray = '✿✈♬☎☻☯♘☃★⌚✂✉☀🎶♞♛✟♨✎☁☹☛☠☾';
  const memoCardsSymbols = [];
  const memoUsedSymbols = [];
  for (let i = 0; i < boardSize / 2; i++) {
      let symbol;
      do {
          const index = Math.floor(Math.random() * memoSymbolsArray.length);
          symbol = memoSymbolsArray.charAt(index);
      } while (memoUsedSymbols.includes(symbol));
      memoUsedSymbols.push(symbol);
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
          setGameStarted(false);
          setFinalSettings(boardSize);
      }
  }, 500);
}, [memoArray, boardSize, setGameStarted, setFinalSettings]);

return (
  <>
      <div className="myDiv">
          <h3 className="item">CZAS GRY: </h3>
          <h3 className="timeAndScore">{formatTime(time)}</h3>
          <h3 className="item">LICZBA RUCHÓW:</h3>
          <h3 className="timeAndScore">{score}</h3>
          <h3 className="item">PRZYCISKI STERUJĄCE</h3>
          <div className="stopBottom">
              <button
                  onClick={() => {
                      setGameStarted(false);
                      setFinalSettings(boardSize);
                  }}
              >
                  STOP
              </button>
          </div>
      </div>
      <div className="memoGame"
    >
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
