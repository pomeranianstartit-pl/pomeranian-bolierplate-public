import { useState } from 'react';

import './style.css';

export function ReactIfAisBiggerthanB() {
  const [inputNumber, setInputNumber] = useState('');
  const [inputNumber1, setInputNumber1] = useState('');

  const [text, setText] = useState('');
  function handleChange(event) {
    setInputNumber(event.target.value);
  }
  function handleChange1(event) {
    setInputNumber1(event.target.value);
  }
  function handleStart() {
    if (inputNumber > inputNumber1) {
      setText('Liczba A jest większa.');
    }

    if (inputNumber < inputNumber1) {
      setText('Liczba B jest większa.');
    }
    if (inputNumber == inputNumber1) {
      setText('Liczby są równe.');
    }
  }

  return (
    <div>
      <button className="button_AB" onClick={handleStart}>
        Sprawdź
      </button>

      <div id="container_biggerAandB">
        <input
          className="input_biggerAB"
          value={inputNumber}
          onChange={handleChange}
          type="number"
          placeholder="A"
        />
        <input
          className="input_biggerAB"
          value={inputNumber1}
          onChange={handleChange1}
          type="number"
          placeholder="B"
        />

        <p>{text}</p>
      </div>
    </div>
  );
}
