import { useState } from 'react';

import './style.css';

export function ReactIfStatements() {
  const [text, setText] = useState('');
  const [clickedCount, setClickedCount] = useState(0);

  function handleClick() {
    // również możliwe zamiast lini 13 i 14
    // setClickedCount(clickedCount + 1);
    // if (warunek) { kod który zostanie wykonany jeśli warunek jest prawdziwy}
    // else { kod który zostanie wykonany jeśli warunek nie jest prawdziwy}
    const newClicedCount = clickedCount + 1;

    if (newClicedCount >= 5) {
      setText('Kliknięto przycisk 5 lub więcej razy!');
    } else {
      setText('Kliknięto przycisk mniej niż 5 razy!');
    }
    setClickedCount(newClicedCount);
  }

  return (
    <div>
      <h1>React If Statement</h1>
      <button onClick={handleClick}>Kliknij mnie!</button>
      <p clasName="text">{text}</p>
      <p clasName="number">{clickedCount}</p>

      {clickedCount > 15 && (
        <p className="clickCount">Ilość kliknięć: {clickedCount}</p>
      )}
    </div>
  );
}
