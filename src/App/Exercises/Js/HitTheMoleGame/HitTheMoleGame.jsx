import React, { useState, useEffect } from 'react';
import './style.css';
import startTimer from './Timer';
import Mole from './mole.svg';

export const MoleGameSettings = ({
  seconds,
  setSeconds,
  moleCount,
  setMoleCount,
  setIsCountingDown,
  gameTime,
  setGameTime,
  score,
  hightScore,
  setScore,
}) => {
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
        <h4>
          Gra polegająca na podążaniu za krecikiem i trafieniu na kwadrat, w
          którym się pojawił.
        </h4>
        <h2 className="scoreStyle">
          {hightScore >= 0 && seconds === 0
            ? `Twój NAJWYŻSZY wynik to ${hightScore}`
            : ''}
        </h2>
        <h2 className="scoreStyle">
          {score >= 0 && seconds === 0
            ? `Twój wynik w tym podejściu to ${score} w czasie ${
                gameTime / 1000 / 60
              } ${gameTime / 1000 / 60 === 1 ? 'minuty' : 'minut'}`
            : ''}
        </h2>

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
                  setScore(0);
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
export const MoleGameBoard = ({
  seconds,
  setIsCountingDown,
  score,
  hitTheMole,
  moleArray,
}) => {
  console.log(moleArray);

  return (
    <>
      <p>Czas: {seconds}</p>
      <p>Wynik: {score}</p>
      <button>STOP</button>
      <div className="moleGame">
        {moleArray.map((mole, index) => {
          return (
            <div key={index}>
              <span>
                {mole.isVisible ? (
                  <div id="spangbob">
                    <img
                      src={Mole}
                      alt="Mole"
                      onClick={() => hitTheMole(index)}
                    />
                  </div>
                ) : (
                  <div id="spangbob">pustka</div>
                )}
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export function HitTheMoleGame() {
  const defaultGameTime = 2 * 60 * 1000;
  const [gameTime, setGameTime] = useState(defaultGameTime); // 2000 * 60
  const [moleCount, setMoleCount] = useState(1);
  const [seconds, setSeconds] = useState(gameTime / 1000);
  const [isCountingDown, setIsCountingDown] = useState(false);
  const [score, setScore] = useState(0);
  const [hightScore, setHightScore] = useState(0);
  const [moleArray, setMoleArray] = useState(
    Array(10).fill({ isVisible: false, isWhacked: false })
  );
  const generatMole = () => {
    const rand = Math.floor(Math.random() * 10);
    setMoleArray((prevMoleArray) =>
      prevMoleArray.map((mole, index) => {
        const uppdatedMole = { ...mole };
        uppdatedMole.isVisible = index === rand;
        return uppdatedMole;
      })
    );
  };
  useEffect(() => {
    let tick;
    if (!tick) {
      tick = setInterval(() => {
        generatMole();
      }, 1000);
    }
    return () => clearInterval(tick);
  }, [seconds]);

  function hitTheMole(index) {
    if (moleArray[index].isVisible) {
      setScore(score + 1);
      setMoleArray((prevVal) => {
        const newArray = [...prevVal];
        newArray[index].isVisible = false;
        return newArray;
      });
    }
  }
  if (score > hightScore) {
    setHightScore(score);
  }
  return (
    <>
      {seconds === 120 || seconds === 0 || seconds === 180 || seconds === 60 ? (
        <MoleGameSettings
          seconds={seconds}
          setSeconds={setSeconds}
          moleCount={moleCount}
          setMoleCount={setMoleCount}
          isCountingDown={isCountingDown}
          setIsCountingDown={setIsCountingDown}
          gameTime={gameTime}
          setGameTime={setGameTime}
          score={score}
          hightScore={hightScore}
          setScore={setScore}
        />
      ) : null}
      {gameTime !== seconds * 1000 && seconds !== 0 ? (
        <MoleGameBoard
          score={score}
          hitTheMole={hitTheMole}
          moleArray={moleArray}
          seconds={seconds}
          setIsCountingDown={setIsCountingDown}
        />
      ) : null}
      {seconds === 0}
    </>
  );
}
