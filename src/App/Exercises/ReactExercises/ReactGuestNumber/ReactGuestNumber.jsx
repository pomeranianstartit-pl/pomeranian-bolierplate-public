import { useState } from 'react';

import './style.css';
function generateRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}
export function ReactGuestNumber() {
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
  const [inputNumber, setInputNumber] = useState('');
  const [text, setText] = useState('');
  const maximum = 10;
  const minimum = 1;

  function handleChange(event) {
    setInputNumber(event.target.value);
  }
  function handleReset() {
    window.location.reload();
  }

  function handleStart() {
    if (inputNumber > randomNumber) {
      setText('Liczba wpisana jest większa od wylosowanej.');
    }

    if (inputNumber < randomNumber) {
      setText('Liczba wpisana jest mniejsza od wylosowanej.');
    }
    if (inputNumber == randomNumber) {
      setText('Gratulacje trafiłeś/trafiłaś.');
    }
    if (inputNumber == '')
      setText('Wpisz dowolną liczbę od ' + minimum + ' do ' + maximum + '.');
  }
  return (
    <div>
      <h1>Jaką jestem liczbą?</h1>
      <button id="start" className="button-exercise5" onClick={handleStart}>
        start
      </button>
      <div>
        <input
          value={inputNumber}
          onChange={handleChange}
          type="number"
          placeholder="A"
          max={maximum}
          min={minimum}
        />
      </div>
      <p> {text}</p>
      <button className="button-exercise5" id="reset" onClick={handleReset}>
        reset
      </button>
    </div>
  );
}
