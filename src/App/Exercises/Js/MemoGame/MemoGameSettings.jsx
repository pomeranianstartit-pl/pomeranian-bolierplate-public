import React, { useState, useEffect } from 'react';

export const MemoGameSettings = ({ memoArray, onStartGame, onRestart }) => {
  const [selectedMemoCount, setSelectedMemoCount] = useState(8);
  const [score, setScore] = useState(0);
  const [clickedMemoCountIndex, setClickedMemoCountIndex] = useState(null);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [restart, setRestart] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  const memoCountOption = [
    { label: '8 elementów', count: 8 },
    { label: '16 elementów', count: 16 },
    { label: '20 elementów', count: 20 },
  ];

  const handleMemoCountSelection = (count, index) => {
    setSelectedMemoCount(count);
    setClickedMemoCountIndex(index);
    setElapsedTime(0);
  };

  const handleRestartGame = () => {
    setSelectedMemoCount(1);
    setScore(0);
    setIsGameStarted(false);
    setRestart(true);
    setElapsedTime(0);
    onRestart();
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  useEffect(() => {
    let interval;

    if (isGameStarted) {
      interval = setInterval(() => {
        setElapsedTime((prevTime) => {
          if (prevTime === 10 * 60 * 1000) {
            clearInterval(interval);
            setIsGameStarted(false);
            return prevTime;
          }
          return prevTime + 1000;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isGameStarted]);

  return (
    <div className="container">
      <div className="memo-game-settings">
        <div className="strings1">
          <p>Gra polegająca na zapamiętywaniu odkrytych kafli i łączeniu ich w pary</p>
        </div>

        <div className="settings-row">
          <div className="settings-label">CZAS GRY</div>
          <div className="settings-value">
            {formatTime(elapsedTime)}
          </div>
        </div>

        <div className="settings-row">
          <div className="settings-label">LICZBA ELEMENTÓW</div>
          <div className="settings-buttons">
            {memoCountOption.map(({ label, count }, index) => {
              const isClicked = selectedMemoCount === count;

              return (
                <button
                  key={index}
                  onClick={() => handleMemoCountSelection(count, index)}
                  className={isClicked ? 'clicked' : ''}
                >
                  {label}
                </button>
              );
            })}
          </div>
          <div className="settings-value">{selectedMemoCount}</div>
        </div>

        {isGameStarted ? (
          <div className="settings-row">
            <div className="settings-label">PRZYCISKI STERUJĄCE</div>
            <div className="settings-buttons">
              <button className="stop-button" onClick={handleRestartGame}>
                PASS
              </button>
            </div>
          </div>
        ) : (
          <div className="settings-row">
            <div className="settings-label">PRZYCISKI STERUJĄCE</div>
            <div className="settings-buttons">
              {elapsedTime !== 10 * 60 * 1000 && (
                <button
                  className="start-button"
                  onClick={() => {
                    setIsGameStarted(true);
                    setElapsedTime(0);
                    onStartGame(10 * 60 * 1000, selectedMemoCount);
                  }}
                >
                  START
                </button>
              )}
            </div>
          </div>
        )}

        {(!isGameStarted && elapsedTime === 10 * 60 * 1000) && (
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

