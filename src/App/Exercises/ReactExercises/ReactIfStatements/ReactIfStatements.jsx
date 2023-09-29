import { useState } from 'react';

import './style.css';

export function ReactIfStatements() {
  const [text, setText] = useState('Nie kliknięto przycisku!');
  const [clickedCount, setClickedCount] = useState(0);

  function handleClick() {
    // również możliwe zamiast linijek 17 i 23
    // setClickedCount(clickedCount + 1);
    // if (warunek) {
    //  kod który zostanie wykonany JEŚLI warunek jest prawdziwy
    // } else {
    //  kod który zostanie wykonany JEŚLI warunek jest fałszywy
    // }

    const newClickedCount = clickedCount + 1;

    if (newClickedCount >= 5) {
      setText('Kliknięto przycisk 5 lub więcej razy!');
    } else {
      setText('Kliknięto przycisk mniej niż 5 razy!');
    }
    setClickedCount(newClickedCount);
  }

  return (
    <div>
      <h1>React If Statements</h1>
      <button onClick={handleClick}>Kliknij mnie!</button>
      <p className="text">{text}</p>
      <p className="number">{clickedCount}</p>
      {clickedCount > 15 && (
        <p className="clickedCount">Ilość kliknięć: {clickedCount}</p>
      )}
    </div>
  );
}
