import { useState } from 'react';

import './style.css';

export function ReactIfAisBiggerThan10() {
  const [inputNumber, setInputNumber] = useState('');
  const [text, setText] = useState('');
  function handleChange(event) {
    setInputNumber(event.target.value);
  }
  function biggerthan10() {
    if (inputNumber > 10) {
      setText('Twoja liczba jest większa niż 10');
    }
    if (inputNumber < 10) {
      setText('Twoja liczba jest mniejsza niż 10');
    } else {
      setText('Twoja liczba jest równa 10.');
    }
  }

  return (
    <div>
      <button className="button_AB" onClick={biggerthan10}>
        Sprawdź
      </button>
      <div>
        <h1>Czy A jest większe od 10?</h1>
        <input
          value={inputNumber}
          onChange={handleChange}
          type="number"
          placeholder="A"
        ></input>
        <p>{text}</p>
      </div>
    </div>
  );
}
