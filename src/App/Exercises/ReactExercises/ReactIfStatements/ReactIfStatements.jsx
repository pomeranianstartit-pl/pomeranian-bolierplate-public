import { useState } from 'react';

import './style.css';

export function ReactIfStatements() {
  const [text, setText] = useState('');
  const [clickedCount, setClickedCount] = useState(0);

  function handleClick() {
    const newClickedCount = clickedCount + 1;
    if (newClickedCount > 5) {
      setText('Kliknieto przycisk więcej niż 5 razy');
    } else {
      setText('Kliknieto przycisk mniej niż 5 razy');
    }
    // inna składnia
    setClickedCount(newClickedCount);
  }
  return (
    <div>
      <h1>React if statements</h1>
      <button onClick={handleClick}>Kliknij mnie!</button>
      <p className="text">{text}</p>
      <p className="number">{clickedCount}</p>
      {/* w return nie mozna uzywac if */}
      {clickedCount > 15 && (
        <p className="clickedCount">Ilość kilknięć: {clickedCount}</p>
      )}
    </div>
  );
}
