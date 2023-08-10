import React from 'react';

export const MemoGameSettings = ({
  boardSize,
  setBoardSize,
  startStopGame,
  gameStarted,
}) => {
  const gameBoardSizeOption = [
    { label: '16 ELEMENTÓW', boardSizeOption: 4 },
    { label: '36 ELEMENTÓW', boardSizeOption: 6 },
    { label: '64 ELEMENTÓW', boardSizeOption: 8 },
  ];

  return (
    <div className="memoGameOptions">
      <p>Odkryj pasujące karty!</p>
      <div className="gameOptionsButtons">
        <div className="gameButtonsRows">
          <div>
            <h4>LICZBA ELEMENTÓW {boardSize}</h4>
            {gameBoardSizeOption.map(({ label, boardSizeOption }) => (
              <button
                className={boardSizeOption === boardSize ? 'activeButton' : ''}
                onClick={() => {
                  setBoardSize(boardSizeOption);
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
