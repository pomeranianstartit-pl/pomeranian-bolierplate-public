import React, { useState, useEffect } from 'react';
import './style.css';
import startTimer from './Timer';
import Mole from './mole.svg';
import { isVisible } from '@testing-library/user-event/dist/utils';

export const MoleGameSettings = () => {
  const defaultGameTime = 2 * 60 * 1000;
  const [gameTime, setGameTime] = useState(defaultGameTime); // 2000 * 60
  const [moleCount, setMoleCount] = useState(1);
  const [seconds, setSeconds] = useState(gameTime / 1000);
  const [isCountingDown, setIsCountingDown] = useState(false);
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

  const handleStartTimer = () => {
    startTimer(seconds, setSeconds, setIsCountingDown); // Wywołanie funkcji startTimer z Timer.jsx
  };

  useEffect(() => {
    console.log(seconds.toString().padStart(3, 0));
  }, [seconds]);

  return (
    <>
      <div className="moleGameOptions">
        <p>
          Gra polegająca na podążaniu za krecikiem i trafieniu na kwadrat, w
          którym się pojawił.
        </p>

        <div className="gameOptionsButtons">
          <div className="gameButtonsRows">
            <div>
              <h4>CZAS GRY {seconds} Sekund</h4>
              {gameTimeOption.map(({ label, timeValue }) => (
                <button
                  className={gameTime === timeValue ? 'activeButton' : ''}
                  onClick={() => {
                    setSeconds(timeValue / 1000);
                    setGameTime(timeValue);
                  }}
                  key={label}
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
                  key={label}
                >
                  {label}
                </button>
              ))}
            </div>

            <div>
              <h4>PRZYCISKI STERUJĄCE</h4>

              <button
                onClick={() => {
                  handleStartTimer();
                }}
              >
                START
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export const MoleGameBoard = (props) => {
  const [moleArray, setMoleArray] = useState(
    Array(10).fill({ isVisible: false, isWhacked: false })
  );
  const [score, setScore] = useState(0);

  const random = setInterval(() => {

    let index = Math.floor(Math.random() * 10);

    setMoleArray((prevMoleArray) => {
      const updatedMoleArray = [...prevMoleArray];
      updatedMoleArray[index] = {... updatedMoleArray[index] , isVisible: !updatedMoleArray[index].isVisible};
      return updatedMoleArray;
    });

    console.log(`index ${index}`);
    setTimeout(() => {
      setMoleArray((prevMoleArray) => {

        const updatedMoleArray = [...prevMoleArray];
        updatedMoleArray[index] = {
          ...updatedMoleArray[index],
          isVisible: !updatedMoleArray[index].isVisible,
        };

        return updatedMoleArray;
      });
    }, 5000);
    
    clearInterval(random);
  }, 5000);

  function hitTheMole(index) {
    setMoleArray((prevMoleArray) =>
      prevMoleArray.filter((mole, moleIndex) => moleIndex !== index));
    setScore(score + 1);
  }

  return (
    <>
      <p>{score}</p>
      <div className="moleGame">
        {moleArray.map((mole, index) => {
          return <div key={index}>
            <span >
              {mole.isVisible ? (
                <div id="spangbob"><img src={Mole} alt="Mole" onClick={() => hitTheMole(index)} /></div>
              ) : <div id="spangbob">pustka</div>}
            </span>
          </div>;
        })}
      </div>
    </>
  );
};

export function HitTheMoleGame(moleArray) {
  return (
    <>
      <MoleGameSettings />
      <MoleGameBoard />
    </>
  );
}
