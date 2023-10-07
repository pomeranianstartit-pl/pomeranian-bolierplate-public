import { useState } from 'react';

export function ReactOnClick() {
  const [text, setText] = useState('Który przycisk naciśnięto?');
  const [number, setNumber] = useState(0);

  function handleClick(event) {
    setText(event.target.innerHTML);
  }

  function handleClickNumber(event) {
    setNumber(number + 1);
  }

  return (
    <div>
      <h1>React - obsługa zdarzenia OnClick</h1>
      <button onClick={handleClick}>Pierwszy przycisk</button>
      <button onClick={handleClick}>Drugi przycisk</button>

      <button onClick={handleClickNumber}>5</button>
      <button onClick={handleClickNumber}>10</button>

      <p>Kliknęliśmy to: {text}</p>
      <p>Kliknęliśmy {number} razy</p>
    </div>
  );
}
