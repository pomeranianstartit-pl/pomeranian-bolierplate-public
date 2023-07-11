import React, { useState, useEffect } from 'react';

export const MoleGameSettings = ({
  gameTime,
  setGameTime,
  moleCount,
  setMoleCount,
  startStopGame,
  gameStarted,
}) => {
  const gameTimeOption = [
    { label: '1 minuta', timeValue: 1 * 60 }, //gameTime podawany w sekundach - licznik robi krok co sekundę
    { label: '2 minuty', timeValue: 2 * 60 },
    { label: '3 minuty', timeValue: 3 * 60 },
  ];

  const moleCountOption = [
    { label: '1 kret' },
    { label: '2 krety' },
    { label: '3 krety' },
  ];

  return (
    <div className="moleGameOptions">
      <p>
        Gra polegająca na podążaniu za krecikiem i trafieniu na kwadrat, w
        którym się pojawił.
      </p>

      <div className="gameOptionsButtons">
        <div className="gameButtonsRows">
          <div>
            <h4>CZAS GRY {gameTime}</h4>
            {gameTimeOption.map(({ label, timeValue }) => (
              <button
                className={gameTime === timeValue ? 'activeButton' : ''}
                onClick={() => {
                  setGameTime(timeValue);
                }}
              >
                {label}
              </button>
            ))}
          </div>
          <div>
            <h4>LICZBA KRETÓW</h4>
            {moleCountOption.map(({ label }) => (
              <button
                className={moleCount === Number(label[0]) ? 'activeButton' : ''}
                onClick={() => setMoleCount(Number(label[0]))}
              >
                {label}
              </button>
            ))}
          </div>
          <div>
            <h4>PRZYCISKI STERUJĄCE</h4>
            <button onClick={startStopGame}>
              {gameStarted ? 'STOP' : 'START'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
