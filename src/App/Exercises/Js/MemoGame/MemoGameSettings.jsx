import React, {useState, useEffect} from 'react';
import './styles.css';

export const MemoGameSettings = ({
  boardSize,
  setBoardSize,
  startStopGame,
  gameStarted,
}) => {
  const gameBoardSizeValue = [
    { label: '8 elementów', boardSizeValue: 4 },
    { label: '16 elementów', boardSizeValue: 6 },
    { label: '20 elementów', boardSizeValue: 8 },
  ];

  return (
    <div className="memoGameOptions">
      <p>Gra polegająca na zapamiętywaniu odkrytych kafli i łączeniu ich w pary</p>
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
            <button onClick={startStopGame}>
              {gameStarted ? 'PASS' : 'START'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
