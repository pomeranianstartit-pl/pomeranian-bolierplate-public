import { useState } from 'react';

import './style.css';
function generateRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}
export function ReactGuestNumber() {
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
  const [inputNumber, setInputNumber] = useState(0);
  const [text, setText] = useState('');

  function handleChange(event) {
    setInputNumber(event.target.value);
  }
  function handleReset() {}

  function handleStart() {
    if (inputNumber > randomNumber) {
      setText('Jestem większa');
    }

    if (inputNumber < randomNumber) {
      setText('Jestem mniejsza');
    }
    if (inputNumber === randomNumber) {
      setText('Gratulacje');
    }
  }
  return (
    <div>
      <h1>Jaką jestem liczbą?</h1>
      <button onclick={handleStart}>start</button>
      <div>
        <input
          value={inputNumber}
          onChange={handleChange}
          type="number"
          placeholder="Wpisz dowolną liczbę"
        />
      </div>
      <p>Jestem mniejsza/ jestem większa / Gratulacje trafiłaś/eś</p>
      <button onclick={handleReset}>reset</button>
    </div>
  );
}
