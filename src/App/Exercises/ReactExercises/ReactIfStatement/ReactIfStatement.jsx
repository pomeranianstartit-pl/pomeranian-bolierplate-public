import { useState } from 'react';

import './style.css';

export function ReactIfStatement() {
  const [text, setText] = useState('Nie kliknięto!');
  const [clickedCount, setClickedCount] = useState(0);

  function handleClick() {
    // również możliwe zamiast linijek 17 i 23
    // setClickedCount(clickedCount + 1);

    // if (warunek) {
    //  kod który zostanie wykonany JEŚLI warunek jest prawdziwy
    // } else {
    // kod który zostanie wykonany JEŚLI warunek jest fałszywy
    // }

    const newClickedCount = clickedCount + 1;

    if (newClickedCount >= 5) {
      setText('Kliknięto przycisk więcej niż 5 razy!');
    } else {
      setText('Kliknięto przycisk mniej niż 5 razy!');
    }

    setClickedCount(newClickedCount);
  }

  return (
    <div>
      <h1>If statements</h1>
      <button onClick={handleClick}>Kliknij mnie!</button>
      <p className="text">{text}</p>
      <p className="number">{clickedCount}</p>

      {clickedCount > 15 && <p>Ilość kliknięć: {clickedCount}</p>}
    </div>
  );
}
