import './styles.css';
import React, { useState, useEffect } from 'react';
const MemoGameSettings = ({
  gameStarted,
  startStopGame,
  boardSizeOptions,
  setBoardSizeOptions,
}) => {
  return (
    <>
      <div className="memoGameOptions">
        <div className="memoOptionsButtons">
          <div className="gameButtonsRows">
            <div>
              <h4>LICZBA ELEMENTÓW:</h4>

              {boardSizeOptions.map(
                ({ label,  checked }, index) => (
                  <button
                    className={checked ? 'activeButton' : ''}
                    onClick={() => {
                      setBoardSizeOptions((prev) =>
                        prev.map((button, i) => {
                          const newButton = { ...button };

                          newButton.checked = index === i;
                          return newButton;
                        })
                      );
                    }}
                  >
                    {label}
                  </button>
                )
              )}
            </div>

            <div>
              <h4>PRZYCISKI STERUJĄCE:</h4>

              <button onClick={startStopGame}>
                {' '}
                {gameStarted ? 'PASS' : 'START'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MemoGameSettings;
