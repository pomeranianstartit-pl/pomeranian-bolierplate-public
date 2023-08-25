import React, { useState } from 'react';
import Krecik from './krecik.png';

export const MoleGameBoard = ({
  moleArray,
  hitTheMole,
  scoreCount,
  startStopGame,
  gameStarted,
  counter,
}) => {
  const [fieldColors, setFieldColors] = useState(Array(10).fill(null));
  const backgroundColorDuration = 300; // in milliseconds

  const handleHitTheMole = (index) => {
    const updatedColors = [...fieldColors];
    if (moleArray[index].isVisible) {
      updatedColors[index] = 'field-green';
      hitTheMole(index);
    } else {
      updatedColors[index] = 'field-red';
    }

    setFieldColors(updatedColors);

    setTimeout(() => {
      updatedColors[index] = null;
      setFieldColors(updatedColors);
    }, backgroundColorDuration);
  };
  return (
    <div>
      <div className="gameOptionsButtons">
        <h4>CZAS DO KOŃCA </h4>
        {counter}
        <h4>WYNIK </h4>
        {scoreCount}
        <h4>PRZYCISKI STERUJĄCE</h4>
        <button onClick={startStopGame}>
          {gameStarted ? 'STOP' : 'START'}
        </button>
      </div>

      <div className="moleGame">
        {moleArray.map((mole, index) => (
          <div key={index} className={`board ${fieldColors[index] || ''}`}>
            <div className="hole">
              {mole.isVisible && (
                <div className="square">
                  <img
                    src={Krecik}
                    onClick={() => handleHitTheMole(index)}
                    alt="MOLE!"
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
