import { useState } from 'react';
import './style.css';

export function ReactIfStatements() {
  const [clickedCount, setClickedCOunt] = useState(0);
  const [text, setText] = useState('');

  function handleClick() {
    const newClickedCount = clickedCount + 1;
    if (newClickedCount > 5) {
      setText('Kliknięto przycisk wiecej 5 lub wiecej razy');
    } else {
      setText('Kliknięto przycisk mniej niż 5 razy!');
    }
    setClickedCOunt(newClickedCount);
  }
  return (
    <div>
      <h1>React If Statements</h1>
      <button onClick={handleClick}>Klknij mnie</button>
      <p className="text">{text}</p>
      <p className="number">{clickedCount}</p>

      {clickedCount > 15 && <p>Ilość klknięć {clickedCount}</p>}
    </div>
  );
}
