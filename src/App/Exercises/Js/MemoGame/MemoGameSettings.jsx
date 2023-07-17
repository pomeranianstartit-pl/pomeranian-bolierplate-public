import React, { useState, useEffect } from 'react';
import './styles.css';

const MemoGameSettings = ({
  gameStarted,
  startStopGame,
  boardSizeOptions,
  setBoardSizeOptions,
  gameCompleted,
}) => {
  const [buttonText, setButtonText] = useState('');

  useEffect(() => {
    setButtonText(gameStarted ? (gameCompleted ? 'RESTART' : 'PASS') : 'START');
  }, [gameStarted, gameCompleted]);

  const handleButtonClick = () => {
    if (gameStarted) {
      if (gameCompleted) {
        setButtonText('RESTART');
      } else {
        setButtonText('PASS');
      }
    }
    startStopGame();
  };

  useEffect(() => {
    setButtonText(gameStarted ? (gameCompleted ? 'RESTART' : 'PASS') : 'START');
  }, [gameStarted, gameCompleted]);

  return (
    <>
      <div className="memoGameOptions">
        <div className="memoOptionsButtons">
          <div className="gameButtonsRows">
            <div>
              <h4 className='settings'>LICZBA ELEMENTÓW:</h4>

              {boardSizeOptions.map(({ label, checked }, index) => (
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
              ))}
            </div>

            <div>
              <h4 className='settings'>PRZYCISKI STERUJĄCE</h4>

              <button onClick={handleButtonClick}>{buttonText}</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MemoGameSettings;


