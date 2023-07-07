import React from 'react';
import Mole from '../../../Images/Mole.svg';

export const MoleGameBoard = ({ scoreCount, moleArray, hitTheMole }) => {
  return (
    <div className="moleGame">
      <h4 className="board-score">WYNIK: {scoreCount}</h4>
      <div className="board">
        {moleArray.map((mole, index) => (
          <div className="square">
            <span>
              {mole.isVisible ? (
                <img src={Mole} id="Mole!" onClick={() => hitTheMole(index)} />
              ) : null}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoleGameBoard;
