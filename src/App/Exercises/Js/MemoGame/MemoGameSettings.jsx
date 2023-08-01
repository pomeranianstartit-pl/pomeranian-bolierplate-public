import React, {useState, useEffect} from 'react';
import './styles.css';
import formatTime from '../MemoGame/FormatTime';

export const MemoGameSettings = ({
  boardSize,
  setBoardSize,
  score,
  setScore,
  time,
  setTime,
  finalSettings,
  setGameStarted,
}) => {
  const gameBoardSizeValue = [
    { label: '8 elementów', boardSizeValue: 8 },
    { label: '16 elementów', boardSizeValue: 16 },
    { label: '20 elementów', boardSizeValue: 20 },
  ];

  return (
    <div className="memoGameOptions">
      <h4>Gra polegająca na zapamiętywaniu odkrytych kafli i łączeniu ich w pary</h4>
      {score > 0 && (
        <h4>Gratulację!Twój wynik to {score} par w czasie {formatTime(time)} na {finalSettings} elementów!</h4>
      )}
      <div className="gameOptionsButtons">
        <div className="gameButtonsRows">
          <div>
            <h4>LICZBA ELEMENTÓW {boardSize}</h4>
            {gameBoardSizeValue.map(({ label, boardSizeValue }) => (
              <button
                className={boardSizeValue === boardSize ? 'activeButton' : ''}
                onClick={() => {
                  setBoardSize(boardSizeValue);
                }}
              >
                {label}
              </button>
            ))}
          </div>
          <div>
            <h4>PRZYCISKI STERUJĄCE</h4>
            <button
                onClick={() => {
                  setGameStarted(true);
                  setScore(0);
                  setTime(0);
                }}
              >
                START
              </button>
          </div>
        </div>
      </div>
    </div>
  );
};
