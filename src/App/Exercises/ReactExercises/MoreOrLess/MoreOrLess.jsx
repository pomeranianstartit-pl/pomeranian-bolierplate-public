import React from 'react';

import './style.css';

export function MoreOrLess() {
  const [text, setText] = React.useState('');

  function handleOnChange(event) {
    const userInput = event.target.value;

    if (userInput > 10) {
      setText('TAK');
    } else {
      setText('NIE');
    }
  }

  return (
    <div>
      <h1>Czy A jest większe od 10?</h1>

      <input
        type="number"
        placeholder="A"
        onChange={handleOnChange}
        defaultValue={0}
      />
      <p>{text}</p>
    </div>
  );
}
