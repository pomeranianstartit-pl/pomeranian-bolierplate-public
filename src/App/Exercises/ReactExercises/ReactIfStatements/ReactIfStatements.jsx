import { useState } from 'react';

import './style.css';

export function ReactIfStatements() {
  const [text, setText] = useState('Nie kliknieto przycisku!');
  const [clickedCount, setClickedCount] = useState(0);

  function handleClick() {
    // albo wersja skrocona zamiast
    //const newClickedCount = clickedCount + 1;
    //setClickedCount(newClickedCount);
    // mozna
    // setClickedCount(clickedCount +1);

    //if (warunek) {
    // kod który zostanie wykonany JEŚLI warunek jest prawdziwy
    // } else {
    // kod który zostanie wykonany JESLI warunek jest falszywy
    // }

    const newClickedCount = clickedCount + 1;

    if (newClickedCount >= 5) {
      setText('Kliknieto przycisk 5 razy lub wiecej!');
    } else {
      setText('Kliknieto przycisk mniej niz 5 razy!');
    }
    setClickedCount(newClickedCount);
  }
  return (
    <div>
      <h1> React If Statements</h1>
      <button onClick={handleClick}>Kliknij mnie!</button>
      <p className="text">{text}</p>
      <p className="number">{clickedCount}</p>

      {clickedCount > 15 && (
        <p className="clickedCount">Ilość kliknięć: {clickedCount}</p>
      )}
    </div>
  );
}
