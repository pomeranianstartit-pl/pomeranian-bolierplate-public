import { useState } from 'react';

import './style.css';

export function generateRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

export function ReactGuessNumber() {
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
  const [inputNumber, setInputNumber] = useState('');
  const [text, setText] = useState('');

  function handleChange(event) {
    setInputNumber(event.target.value);
  }
  function handleReset(event) {
    setRandomNumber(generateRandomNumber());
    setText('');
    setInputNumber('');
  }

  console.log(randomNumber, 'wygenerowany random number');

  function handleStart(event) {
    if (inputNumber > randomNumber) {
      setText('Jestem mniejsza');
    }
    if (inputNumber < randomNumber) {
      setText('Jestem większa');
    }
    if (inputNumber == randomNumber) {
      setText('Gratulacje!');
    }
  }
  return (
    <div>
      <h1>Jaką jestem liczbą?</h1>
      <button onClick={handleStart}>Start</button>
      <div>
        <input
          placeholder="Wpisz dowolną liczbę"
          value={inputNumber}
          onChange={handleChange}
          type="number"
        />
      </div>
      <p>{text}</p>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
