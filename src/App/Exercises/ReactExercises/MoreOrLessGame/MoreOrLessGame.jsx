import React, { useState } from 'react';

import './style.css';

export function MoreOrLessGame() {
  const [number, setNumber] = useState('');
  const [isActiveStartButton, setIsActiveStartButton] = useState(false);
  const [randomN, setRandomN] = useState(generateRandomNumber());

  function handleStartOnClick(e) {
    setIsActiveStartButton(!isActiveStartButton);
  }
  function handleTextOnChange(e) {
    const inputTarget = e.target.value;
    setNumber(inputTarget);
  }

  function handleResetOnClick(e) {
    setIsActiveStartButton(false);
    setNumber('');
    setRandomN(generateRandomNumber());
  }

  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }
  // console.log(randomN);

  return (
    <div className="game-box">
      <h2>Jaką jestem liczbą?</h2>
      <button
        className="start-button"
        type="button"
        onClick={handleStartOnClick}
      >
        START
      </button>
      {isActiveStartButton && (
        <input
          value={number}
          placeholder="Wpisz liczbę 0-100"
          onChange={handleTextOnChange}
        />
      )}
      {number > 0 && +number < randomN && <p>Jestem większa, zgaduj dalej!</p>}
      {number > 0 && +number > randomN && <p>Jestem mniejsza, zgaduj dalej!</p>}
      {number > 0 && +number === randomN && <p>Gratulacje! Odkryłeś mnie!</p>}
      {+number === randomN && (
        <button
          className="reset-button"
          type="button"
          onClick={handleResetOnClick}
        >
          RESET
        </button>
      )}
    </div>
  );
}
