import { useState } from 'react';

// function useState() {
//   return [... , ...]
// }

export function ReactOnCLick() {
  const [text, setText] = useState('Który przycisk został kliknięty?');

  function handleClick(event) {
    setText(event.target.innerHTML, 'event');
  }

  return (
    <div>
      <h1>React on Click</h1>
      <button onClick={handleClick}>Drugi przycisk</button>
      <button onClick={handleClick}>Pierwszy przycisk</button>
      <p>{text}</p>
    </div>
  );
}
