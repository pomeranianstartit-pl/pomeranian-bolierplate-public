import React, { useEffect, useState } from 'react';
import KrecikIMG from './krecik.png';
import './styles.css';

export const MoleGameSettings = ({ moleArray, onStartGame }) => {
  const defaultGameTime = 2 * 60 * 1000;

  const [selectedGameTime, setSelectedGameTime] = useState(defaultGameTime);
  const [selectedMoleCount, setSelectedMoleCount] = useState(1);

  const [clickedGameTimeIndex, setClickedGameTimeIndex] = useState(null);
  const [clickedMoleCountIndex, setClickedMoleCountIndex] = useState(null);
  
  function hitTheMole(index) {
    if (!moleArray[index].isVisible) return;
    moleArray[index].isWhacked = !moleArray[index].isWhacked;
    console.log(moleArray[index].isWhacked);
  }

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
  
  useEffect(() => {
    if (selectedGameTime === 0) {
      console.log('Czas gry minął!');
    }
  }, [selectedGameTime]);

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
            {selectedGameTime / 1000} sekund
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

        <div className="settings-row">
          <div className="settings-label">PRZYCISKI STERUJĄCE</div>
          <div className="settings-buttons">
            <button className="start-button" onClick={() => onStartGame(selectedGameTime, selectedMoleCount)}>
              START
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const MoleGameBoard = ({ moleArray }) => {
  function hitTheMole(index) {
    if (!moleArray[index].isVisible) return;
    moleArray[index].isWhacked = !moleArray[index].isWhacked;
    console.log(moleArray[index].isWhacked);
  }

  return (
    <div className="container">
      <div className="mole-game-board">
        {moleArray.map((mole, index) => (
          <div key={index}>
            <p>
              <span>
                {mole.isVisible && (
                  <img src={KrecikIMG} onClick={() => hitTheMole(index)} />
                )}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export function Mole() {
  const [moleArray, setMoleArray] = useState([{ isVisible: true, isWhacked: false }]);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const defaultGameTime = 2 * 60 * 1000;

  const startGame = (gameTime, moleCount) => {

    console.log("Starting game with gameTime:", gameTime, "and moleCount:", moleCount);
   
    setIsGameStarted(true);

    let remainingTime = gameTime;
    const countdownInterval = setInterval(() => {
      console.log("Remaining time:", remainingTime / 1000, "seconds");
      remainingTime -= 1000;
      if (remainingTime <= 0) {
        console.log('Czas gry minął!');
        clearInterval(countdownInterval);
      }
    }, 1000);
  };

  const [selectedGameTime, setSelectedGameTime] = useState(defaultGameTime); // Dodano definicję setSelectedGameTime

  useEffect(() => {
    if (isGameStarted) {
      const timer = setInterval(() => {
        setSelectedGameTime((prevTime) => prevTime - 1000);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [isGameStarted]);

  return (
    <>
      <MoleGameSettings moleArray={moleArray} onStartGame={startGame} />
      {isGameStarted && <MoleGameBoard moleArray={moleArray} />}
    </>
  );
}









