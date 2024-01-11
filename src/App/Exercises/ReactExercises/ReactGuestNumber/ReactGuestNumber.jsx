import { useState } from 'react';

import './style.css';
function generateRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}
export function ReactGuestNumber() {
  const randomNumberChosen = generateRandomNumber();
  const [randomNumber, setRandomNumber] = useState(randomNumberChosen);
  const [inputNumber, setInputNumber] = useState('');
  const [firstName, setFirstName] = useState(generateRandomNumber());
  const [text, setText] = useState('');
  const maximum = 10;
  const minimum = 1;
  console.log(randomNumber, 'number');

  // function handleChange(event) {
  //   setInputNumber(event.target.value);
  // }
  function handleReset() {
    setRandomNumber(generateRandomNumber());
  }

  function handleStart() {
    if (firstName === randomNumber) {
      setText('Gratulacje trafiłeś/trafiłaś.');
    }
    if (firstName > randomNumber) {
      setText('Liczba wpisana jest większa od wylosowanej.');
    }

    if (firstName < randomNumber) {
      setText('Liczba wpisana jest mniejsza od wylosowanej.');
    }

    if (firstName === '')
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
          onChange={(e) => setFirstName(e.target.value)}
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
