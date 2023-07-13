import React from 'react';
import Mole from '../../../Images/Mole.svg';
import formatTime from './Time';

export const MoleGameBoard = ({
  scoreCount,
  moleArray,
  hitTheMole,
  gameStarted,
  timer,
}) => {
  if (gameStarted) {
    return (
      <div className="moleGame">
        <h4 className="board-score">WYNIK: {`${scoreCount}`}</h4>
        <h4 className="timer">Pozostały czas {formatTime(timer)}</h4>
        <div className="board">
          {moleArray.map((mole, index) => (
            <div className="square">
              <span>
                {mole.isVisible ? (
                  <img
                    src={Mole}
                    id="Mole!"
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
