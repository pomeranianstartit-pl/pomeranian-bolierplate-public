import { useState, useEffect } from 'react';
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
  useEffect(() => {
    const generateMemoArray = () => {
      const memoSymbols = 'ABCDEFGHIJKLMNOPRSTUWXYZ'; // Symbole 24, max tablica 48
      const memoCardsSymbols = [];
      for (let i = 0; i < boardSize / 2; i++) {
        const index = Math.floor(Math.random() * (24 - 0) + 0);
        const letter = memoSymbols.charAt(index);
        memoCardsSymbols.push({
          symbol: letter,
          isVisableLetteer: false,
          isVisibleBox: true,
        });
      }
      console.log(memoCardsSymbols);
      const shuffledCards = [...memoCardsSymbols, ...memoCardsSymbols].sort(
        () => Math.random() - 0.5
      );
      console.log(shuffledCards);
      setMemoArray(shuffledCards);
    };
    generateMemoArray();
  }, [boardSize]);

  const VisableFunction = (index, memo) => {
    const updatedMemoArray = [...memoArray];
    updatedMemoArray[index] = { ...memo, isVisable: !memo.isVisableLetteer };
    const isVisibleLetters = updatedMemoArray.filter((memo) => memo.isVisable);
    console.log({ index });
    if (isVisibleLetters.length === 2) {
      setTimeout(() => {
        updatedMemoArray.forEach((memo) => {
          memo.isVisable = false;
        }, 2000);
      });
    }
    return updatedMemoArray;
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
      <div className="memoGame">
        {memoArray.map((memo, index) => {
          return (
            <div key={index}>
              <span
                onClick={() => {
                  setScore(++score);
                  setMemoArray(VisableFunction(index, memo));
                }}
              >
                <div id="squer">{memo.isVisable && memo.symbol}</div>
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
};
