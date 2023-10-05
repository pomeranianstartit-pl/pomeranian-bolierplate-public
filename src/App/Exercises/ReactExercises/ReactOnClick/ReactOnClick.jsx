import { useState } from 'react';

export function ReactOnClick() {
  const [text, setText] = useState('Który przycisk został wcisnięty?');
  const [number, setNumber] = useState(0);

  function handleClick(event) {
    setText(event.target.innerHTML);
  }
  function handleClickNumber(event) {
    setNumber(event.target.innerHTML);
    // console.log('test');
    // event jest OBIEKTEM ktore opisuje dane zdarzenie
  }
  return (
    <div>
      <h1>React onClick </h1>
      <button onClick={handleClick}>Drugi przycisk</button>
      <button onClick={handleClick}>Pierwszy przycisk</button>
      <button onClick={handleClickNumber}>5</button>
      <button onClick={handleClickNumber}>10</button>
      <p>{text}</p>
      <p>{number}</p>
    </div>
  );
}
