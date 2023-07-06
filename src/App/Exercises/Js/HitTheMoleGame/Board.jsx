import React from 'react';
import Mole from '../../../Images/Mole.svg';

export const MoleGameBoard = ({ scoreCount, moleArray, hitTheMole }) => {
  return (
    <div className="moleGame">
      Obecny wynik to: {scoreCount}
      {moleArray.map((mole, index) => (
        <div style={{ width: '100px', height: '100px', gap: '5px' }}>
          <span>
            {mole.isVisible ? (
              <img src={Mole} id="Mole!" onClick={() => hitTheMole(index)} />
            ) : null}
          </span>
        </div>
      ))}
    </div>
  );
};

export default MoleGameBoard;
