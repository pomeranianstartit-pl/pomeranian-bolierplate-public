import { useState } from 'react';

import './style.css';

export function ReactIfAisBiggerThan10() {
  const [inputNumber, setInputNumber] = useState('');
  const [text, setText] = useState('Wprowadź liczbę');
  function changeToNumber(string) {
    const changeStringtoNumber = parseInt(string);
    return changeStringtoNumber;
  }
  function handleChange(event) {
    setInputNumber(event.target.value);
    if (changeToNumber(event.target.value) > 10) {
      setText(' jest większa niż 10');
    }
    if (changeToNumber(event.target.value) < 10) {
      setText(' jest mniejsza niż 10');
    }
    if (changeToNumber(event.target.value) === 10) {
      setText(' jest równa 10.');
    }
    console.log(event.target.value);
  }

  return (
    <div>
      {/* <button className="button_AB" onClick={biggerthan10}>
        Sprawdź
      </button> */}
      <div>
        <h1>Czy A jest większe od 10?</h1>
        <input
          value={inputNumber}
          onChange={handleChange}
          type="number"
          placeholder="A"
        ></input>
        <p>
          Twoja liczba {inputNumber} {text}.
        </p>
      </div>
    </div>
  );
}
