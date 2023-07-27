import React, { useEffect, useState } from 'react';

import './style.css';

const generateRandomNumber = () => {
  return Math.floor(Math.random() * 100) + 1;
};

export function WhatNumberAmI() {
  const [liczba, setLiczba] = useState(0);
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());

  const handleReset = () => {
    setRandomNumber(generateRandomNumber());
  };

  const handleOnChange = (event) => {
    let inputValue = event.target.value;
    console.log(inputValue, 'input value');
    setLiczba(Number(inputValue));
  };

  useEffect(() => {
    console.log(liczba, 'input value');
  });

  return (
    <div className="cwiczenie-3">
      <h1>Jaką jestem liczbą?</h1>
      <p>Jestem liczbą: {randomNumber}</p>
      <button className="startButton" onClick={generateRandomNumber}>
        START
      </button>
      <br></br>
      <input
        className="inputText"
        type="text"
        value={liczba}
        onChange={handleOnChange}
      />

      <p>
        {randomNumber > liczba && 'Jestem większa'}
        {randomNumber < liczba && 'Jestem mniejsza'}
        {liczba === randomNumber && 'Gratulacje!'}
      </p>
      <br></br>
      <button className="restButton" onClick={handleReset}>
        RESET
      </button>
    </div>
  );
}
