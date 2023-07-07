import React, { useState, useEffect } from "react";

export const MoleGameSettings = ({ moleArray, onStartGame }) => {
  const defaultGameTime = 1 * 60 * 1000;

  const [selectedGameTime, setSelectedGameTime] = useState(defaultGameTime);
  const [selectedMoleCount, setSelectedMoleCount] = useState(1);
  const [remainingTime, setRemainingTime] = useState(defaultGameTime);
  const [isGameOver, setIsGameOver] = useState(false);

  const [clickedGameTimeIndex, setClickedGameTimeIndex] = useState(null);
  const [clickedMoleCountIndex, setClickedMoleCountIndex] = useState(null);

  const gameTimeOption = [
    { label: '1 minuta', timeValue: 1 * 60 * 1000 },
    { label: '2 minuty', timeValue: 2 * 60 * 1000 },
    { label: '3 minuty', timeValue: 3 * 60 * 1000 },
  ];

  const moleCountOption = [
    { label: '1 kret' },
    { label: '2 krety' },
    { label: '3 krety' },
  ];

  const handleGameTimeSelection = (timeValue, index) => {
    setSelectedGameTime(timeValue);
    setRemainingTime(timeValue);
    setClickedGameTimeIndex(index);
    setIsGameOver(false);
  };

  const handleMoleCountSelection = (count, index) => {
    setSelectedMoleCount(count);
    setClickedMoleCountIndex(index);
  };

  const handleRestartGame = () => {
    setRemainingTime(selectedGameTime);
    setIsGameOver(false);
  };

  useEffect(() => {
    if (remainingTime === 0) {
      setIsGameOver(true);
    }
  }, [remainingTime]);

  useEffect(() => {
    let interval;

    if (remainingTime > 0) {
      interval = setInterval(() => {
        setRemainingTime((prevTime) => {
          if (prevTime === 0) {
            clearInterval(interval);
            setIsGameOver(true);
            return 0;
          }
          return prevTime - 1000;
        });
      }, 1000);
    } else {
      setIsGameOver(true);
    }

    return () => clearInterval(interval);
  }, [remainingTime]);

  return (
    <div className="container">
      <div className="mole-game-settings">
        <div className="strings1">
          <p>Gra polegająca na podążaniu za krecikiem i trafieniu na kwadrat, w którym się pojawił.</p>
        </div>

        <div className="settings-row">
          <div className="settings-label">CZAS GRY</div>
          <div className="settings-buttons">
            {gameTimeOption.map(({ label, timeValue }, index) => (
              <button
                key={index}
                onClick={() => handleGameTimeSelection(timeValue, index)}
                className={clickedGameTimeIndex === index ? 'clicked' : ''}
              >
                {label}
              </button>
            ))}
          </div>
          <div className="settings-value">
            {remainingTime / 1000} sekund
          </div>
        </div>

        <div className="settings-row">
          <div className="settings-label">LICZBA KRETÓW</div>
          <div className="settings-buttons">
            {moleCountOption.map(({ label }, index) => (
              <button
                key={index}
                onClick={() => handleMoleCountSelection(Number(label[0]), index)}
                className={clickedMoleCountIndex === index ? 'clicked' : ''}
              >
                {label}
              </button>
            ))}
          </div>
          <div className="settings-value">{selectedMoleCount}</div>
        </div>

        {isGameOver ? (
          <div className="settings-row">
            <div className="game-time-up-message">Koniec gry!</div>
            <button className="restart-button" onClick={handleRestartGame}>
              Restart
            </button>
          </div>
        ) : (
          <div className="settings-row">
            <div className="settings-label">PRZYCISKI STERUJĄCE</div>
            <div className="settings-buttons">
              <button className="start-button" onClick={() => onStartGame(selectedGameTime, selectedMoleCount)}>
                START
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};


