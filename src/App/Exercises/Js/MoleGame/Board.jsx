import React from 'react';
import Mole from '../../../Images/Mole.svg';
import formatTime from './Time';

export const MoleGameBoard = ({
  scoreCount,
  moleArray,
  hitTheMole,
  gameStarted,
  timer,
  restartGame,
}) => {
  if (gameStarted) {
    return (
      <div className="moleGame">
        <div className="game-info">
          <div className="time">
            <h4 className="game-text">CZAS DO KOŃCA</h4>
            <div className="timeAndScore">{formatTime(timer)}</div>
          </div>
          <div className="score">
            <h4 className="game-text">WYNIK </h4>
            <div className="timeAndScore">{`${scoreCount}`}</div>
          </div>
          <div className="restart">
            <h4 className="game-text">PRZYCISKI STERUJĄCE</h4>
            <button onClick={restartGame} className="restartButton">
              Restart
            </button>
          </div>
        </div>
        <div className="board">
          {moleArray.map((mole, index) => (
            <div className="square" key={index}>
              <span>
                {mole.isVisible ? (
                  <img
                    src={Mole}
                    alt="Mole!"
                    onClick={() => hitTheMole(index)}
                  />
                ) : null}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default MoleGameBoard;
