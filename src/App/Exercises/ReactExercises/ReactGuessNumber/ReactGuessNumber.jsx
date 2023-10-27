import { useState } from 'react';
import './style.css';

function generateRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

export function ReactGuessNumber() {
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
  const [inputNumber, setInputNumber] = useState(0);
  const [text, setText] = useState('');

  function handleChange(event) {
    setInputNumber(event.target.value);
  }
  function handleReset() {}
  function handleStart() {
    if (inputNumber > randomNumber) {
      setText('jestem większa');
    }
    if (inputNumber < randomNumber) {
      setText('jestem mniejsza');
    }
    if (inputNumber == randomNumber) {
      setText('Gratulacje trafiłeś!');
    }
  }

  return (
    <div>
      <h1>Jaką jestem liczbą?</h1>
      <button onClick={handleStart}>start</button>
      <div>
        <input
          placeholder="wpisz dowolną liczbę"
          type="number"
          value={inputNumber}
          onChange={handleChange}
        />
      </div>
      <p>{text}</p>
      <button onClick={handleReset}>reset</button>
    </div>
  );
}
