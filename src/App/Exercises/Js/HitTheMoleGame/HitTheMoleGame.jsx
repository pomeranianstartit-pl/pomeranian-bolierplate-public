import React, { useState, useEffect } from 'react';
import './style.css';
import Mole from './mole.svg';

export const MoleGameSettings = () => {
  const defaultGameTime = 2 * 60 * 1000;
  const [gameTime, setGameTime] = useState(defaultGameTime); // 2000 * 60
  const [moleCount, setMoleCount] = useState(1);
  const [seconds, setSeconds] = useState(gameTime / 1000);
  const [seconds2, setSeconds2] = useState(gameTime / 1000);
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

  const startTimer = () => {
    setIsCountingDown(true);

    let secondsRemaining = seconds;

    const intervalId = setInterval(() => {
      if (secondsRemaining >= 0) {
        setSeconds(secondsRemaining);
        secondsRemaining--;
      } else {
        clearInterval(intervalId);
        setIsCountingDown(false);
      }
    }, 1000);
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
              <h4>CZAS GRY</h4>
              {gameTimeOption.map(({ label, timeValue }) => (
                <button
                  className={gameTime === timeValue ? 'activeButton' : ''}
                  onClick={() => (
                    setSeconds(timeValue / 1000),
                    setSeconds2(timeValue / 1000),
                    setGameTime(timeValue)
                  )}
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
                  startTimer();
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
  return (
    <div className="moleGame">
      {props.moleArray.map((mole, index) => {
        <div>
          <span>
            {mole.isVisible ? (
              <img src={Mole} onClick={() => props.hitTheMole(index)} />
            ) : null}
          </span>
        </div>;
      })}
    </div>
  );
};

export function HitTheMoleGame() {
  const [moleArray, setMoleArray] = useState(
    Array(10).fill({ isVisible: false, isWhacked: false })
  );

  function hitTheMole(index) {
    console.log(moleArray[index].isWhacked);

    if (!moleArray[index].isVisible) return;

    moleArray[index].isWhacked = !moleArray[index].isWhacked;

    console.log(moleArray[index].isWhacked);
  }

  return (
    <>
      <MoleGameSettings />

      <MoleGameBoard moleArray={moleArray} hitTheMole={hitTheMole} />
    </>
  );
}
