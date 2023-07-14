import { useState, useEffect } from 'react';
import formatTime from './FormatTime';

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
    const createMemoArray = () => {
      const memoSymbols = 'ABCDEFGHIJKLMNOPRSTUWXYZ';
      const memoCardsSymbols = [];

      for (let i = 0; i < boardSize / 2; i++) {
        const index = Math.floor(Math.random() * 24);
        const letter = memoSymbols.charAt(index);

        memoCardsSymbols.push({
          symbol: letter,
          isVisibleLetter: false,
          isVisibleBox: true,
        });
      }
      const shuffledCards = [...memoCardsSymbols, ...memoCardsSymbols].sort(
        () => Math.random() - 0.5
      );

      setMemoArray(shuffledCards);
    };

    createMemoArray();
  }, [boardSize]);

  const VisibilityFunction = (index, memo) => {
    const updatedMemoArray = [...memoArray];
    updatedMemoArray[index] = { ...memo, isVisible: !memo.isVisibleLetter };

    const isVisibleCharacters = updatedMemoArray.filter(
      (memo) => memo.isVisible
    );

    if (isVisibleCharacters.length === 2) {
      setTimeout(() => {
        updatedMemoArray.forEach((memo) => {
          memo.isVisible = false;
        }, 2000);
      });
    }

    return updatedMemoArray;
  };

  return (
    <>
      <div className="memoGameContainer">
        <h2 className>CZAS GRY:</h2>
        <h2 className="timeAndScore">{formatTime(gameTime)}</h2>
        <h2>LICZBA RUCHÓW:</h2>
        <h2 className="timeAndScore">{score}</h2>
        <h2>PRZYCISKI STERUJĄCE</h2>
        <div className="stopButton">
          <button
            onClick={() => {
              setGameStart(false);
              setFinalSettings(boardSize);
            }}
          >
            Restart
          </button>
        </div>
      </div>
      <div className="memoGame">
        {memoArray.map((memo, index) => {
          return (
            <div key={index}>
              <div
                onClick={() => {
                  setScore(++score);
                  setMemoArray(VisibilityFunction(index, memo));
                }}
              >
                <div id="square">{memo.isVisible && memo.symbol}</div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
