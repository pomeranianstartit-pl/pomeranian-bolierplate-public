import { useState } from 'react';

import './style.css';

function generateRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

export function ReactGuessNumber() {
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());

  const [inputNumber, setInputNumber] = useState();

  const [text, setText] = useState('');

  console.log(randomNumber, 'randomNumber');

  function handleChange(event) {
    setInputNumber(event.target.value);
  }
  function handleStart() {
    if (inputNumber > randomNumber) {
      setText('Jestem Mniejsza');
    } else if (inputNumber < randomNumber) {
      setText('Jestem większa');
    } else setText('Gratulacje trafiłeś');
  }
  function handleReset() {}

  return (
    <div>
      <h1>Jaką jestem liczbą?</h1>

      <button onClick={handleStart}>start</button>

      <div>
        <input
          placeholder="Wpisz liczbę od 1 do 10"
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
