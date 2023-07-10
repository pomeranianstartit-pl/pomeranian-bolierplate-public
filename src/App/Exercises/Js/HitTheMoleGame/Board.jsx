import React, { useEffect } from 'react';
import './style.css';
import Mole from './mole.svg';
import formatTime from './FormatTime';
export const MoleGameBoard = ({
  setSeconds,
  seconds,
  isCountingDown,
  setIsCountingDown,
  score,
  hitTheMole,
  moleArray,
}) => {
  const handleStop = () => {
    setIsCountingDown(!isCountingDown);
  };
  useEffect(() => {
    if (score === 20) {
      setIsCountingDown(!isCountingDown);
      setSeconds(0);
    }
  }, [isCountingDown, score, setIsCountingDown, setSeconds]);
  return (
    <>
      <div className="container">
        <h2 className="item">CZAS DO KOŃCA: </h2>
        <h2 className="timeAndScore">{formatTime(seconds)}</h2>
        <h2 className="item">WYNIK:</h2>
        <h2 className="timeAndScore">{score}</h2>
        <h2 className="item">PRZYCISKI STERUJĄCE</h2>
        <div className="stopBottom">
          <button
            onClick={() => {
              handleStop();
              setSeconds(0);
            }}
          >
            STOP
          </button>
        </div>
      </div>
      <div className="moleGame">
        {moleArray.map((mole, index) => {
          return (
            <div key={index}>
              <span>
                {mole.isVisible ? (
                  <div id="mink">
                    <img
                      src={Mole}
                      alt="Mole"
                      onClick={() => hitTheMole(index)}
                    />
                  </div>
                ) : (
                  <div id="mink">pustka</div>
                )}
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
};
