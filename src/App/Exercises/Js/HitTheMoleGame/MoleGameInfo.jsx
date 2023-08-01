import React from 'react';

export const MoleGameSettings = ({
  gameTime,
  moleCount,
  setGameTime,
  setMoleCount,
  startStopGame,
  gameStarted,
}) => {
  const gameTimeOption = [
    { label: '1 minuta', timeValue: 1 * 60 * 1000 },
    { label: '2 minuta', timeValue: 2 * 60 * 1000 },
    { label: '3 minuta', timeValue: 3 * 60 * 1000 },
  ];
  const moleCountOption = [
    { label: '1 kret' },
    { label: '2 krety' },
    { label: '3 krety' },
  ];
  return (
    <>
      <div className="moleGameOptions">
        <p>
        Gratulację! Twój wynik to 32 złapane krety w czasie 2 minut!
        </p>
        <div className="gameOptionsButtons">
          <div className="gameButtonsRows">
            <div>
            <h4>CZAS GRY</h4>

              {gameTimeOption.map(({ label, timeValue }) => (
                <button
                  className={gameTime === timeValue ? 'activeButton' : ''}
                  onClick={() => setGameTime(timeValue)}
                >
                  {label}
                </button>
              ))}
            </div>

            <div>
            <h4>LICZBA KRETÓW</h4>

              {moleCountOption.map(({ label }) => (
                <button
                  className={
                    moleCount === Number(label[0]) ? 'activeButton' : ''
                  }
                  onClick={() => setMoleCount(Number(label[0]))}
                >
                  {label}
                </button>
              ))}
            </div>

            <div>
              <h4>PRZYCISKI STERUJĄCE</h4>

              <button onClick={startStopGame}>START {gameStarted}</button>
            </div>
          </div>
        </div>
        </div>
    </>
  );
};
export default MoleGameSettings;