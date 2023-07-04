import React, { useState } from 'react';
import Mole from '../../../Images/Mole.svg';

export function HitTheMoleGame() {
  const [moleArray, setMoleArray] = useState(
    Array(10).fill({ isVisible: false, isWhacked: false })
  );

  const defaultGameTime = 2 * 60 * 1000;

  const [gameTime, setGameTime] = useState(defaultGameTime); // 2000 * 60

  const [moleCount, setMoleCount] = useState(1);

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

  function hitTheMole(index) {
    console.log(moleArray[index].isWhacked);

    if (!moleArray[index].isVisible) return;

    moleArray[index].isWhacked = !moleArray[index].isWhacked;

    console.log(moleArray[index].isWhacked);
  }

  return (
    <div>
      <p>Liczba kretów: {moleCount}</p>

      {moleCountOption.map(({ label }) => (
        <button onClick={() => setMoleCount(Number(label[0]))}>{label}</button>
      ))}

      <p>
        Czas gry: {gameTime / 60 / 1000}
        {gameTime > 1 * 60 * 1000 ? ' minuty' : ' minuta'}
      </p>

      {gameTimeOption.map(({ label, timeValue }) => (
        <button onClick={() => setGameTime(timeValue)}>{label}</button>
      ))}

      {moleArray.map((mole, index) => {
        return (
          <div>
            <span>
              {mole.isVisible ? (
                <img src={Mole} onClick={() => hitTheMole(index)} />
              ) : null}
            </span>
          </div>
        );
      })}
    </div>
  );
}
