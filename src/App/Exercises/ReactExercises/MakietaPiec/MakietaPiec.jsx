import React, { useState } from 'react';

import './style.css';
function generateRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

export function MakietaPiec() {
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
  const [inputNumber, setInputNumber] = useState('');
  const handleValue = (e) => {
    let inputValue = e.target.value;
    setInputNumber(inputValue);
  };

  return (
    <div>
      <h2>Jaką jestem liczbą?{randomNumber}</h2>
      <button>START</button> <br />
      <input type="number" value={inputNumber} onChange={handleValue} />
      <p>
        {randomNumber > inputNumber && 'Jestem mniejsza'}
        {randomNumber < inputNumber && 'jestem większa'}
        {randomNumber == inputNumber && 'Gratulacje zgadłeś/aś'}
      </p>
      <button>RESET</button>
    </div>
  );
}
