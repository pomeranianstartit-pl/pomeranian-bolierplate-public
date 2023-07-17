import React, { useState, useEffect } from 'react';

export const MoleGameSettings = ({ moleArray, onStartGame, onRestart }) => {
  const defaultGameTime = 1 * 60 * 1000;

  const [selectedGameTime, setSelectedGameTime] = useState(defaultGameTime);
  const [selectedMoleCount, setSelectedMoleCount] = useState(1);
  const [score, setScore] = useState(0);
  const [clickedGameTimeIndex, setClickedGameTimeIndex] = useState(null);
  const [clickedMoleCountIndex, setClickedMoleCountIndex] = useState(null);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [restart, setRestart] = useState(false); // Dodany stan restartu

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
    setClickedGameTimeIndex(index);
  };

  const handleMoleCountSelection = (count, index) => {
    setSelectedMoleCount(count);
    setClickedMoleCountIndex(index);
  };

  const handleRestartGame = () => {
    setSelectedGameTime(defaultGameTime);
    setSelectedMoleCount(1);
    setScore(0);
    setIsGameStarted(false);
    setRestart(true); // Ustawienie restartu na true
    onRestart(); // Wywołanie funkcji onRestart z komponentu rodzica
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  useEffect(() => {
    if (selectedGameTime === 0 || score === 5) {
      setIsGameStarted(false);
    }
  }, [selectedGameTime, score]);

  useEffect(() => {
    let interval;

    if (isGameStarted) {
      interval = setInterval(() => {
        setSelectedGameTime((prevTime) => {
          if (prevTime === 0 || score === 5) {
            clearInterval(interval);
            setIsGameStarted(false);
            return 0;
          }
          return prevTime - 1000;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isGameStarted, score]);

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
            {formatTime(selectedGameTime)}
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

        {isGameStarted ? (
          <div className="settings-row">
            <div className="settings-label">PRZYCISKI STERUJĄCE</div>
            <div className="settings-buttons">
              <button className="stop-button" onClick={handleRestartGame}>
                STOP
              </button>
            </div>
          </div>
        ) : (
          <div className="settings-row">
            <div className="settings-label">PRZYCISKI STERUJĄCE</div>
            <div className="settings-buttons">
              {selectedGameTime !== 0 && (
                <button className="start-button" onClick={() => {
                  setIsGameStarted(true);
                  onStartGame(selectedGameTime, selectedMoleCount);
                }}>
                  START
                </button>
              )}
            </div>
          </div>
        )}

        {(!isGameStarted && selectedGameTime === 0) && (
          <div className="settings-row">
            <div className="game-time-up-message">! Gratulacje! Twój wynik to {score} złapane krety</div>
            <button className="restart-button" onClick={handleRestartGame}>
              RESTART
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

