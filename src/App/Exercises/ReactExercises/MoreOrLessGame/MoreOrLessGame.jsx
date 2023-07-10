import React, { useState } from 'react';

import './style.css';

export function MoreOrLessGame() {
  const [value, setValue] = useState('placeholder');
  const [ranValue, setRanValue] = useState('');

  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }
  const randomNumber = generateRandomNumber();

  const handleOnChange = (e) => {
    let inputValue = e.target.value;
    setValue(inputValue);
  };

  return (
    <div>
      <h2>Jaką jestem liczbą?</h2>
      <button type="button" onClick={randomNumber}>
        START
      </button>
      <input
        type="text"
        placeholder="Wpisz liczbę 0-100"
        onChange={handleOnChange}
      />
      <p>Wygenerowana liczba: {randomNumber}</p>
      <p>Przykładowy tekst czy ktoś wygrał</p>
      <button>RESET</button>
    </div>
  );
}
