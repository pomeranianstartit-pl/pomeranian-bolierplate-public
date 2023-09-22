import React, { useState } from 'react';

import './style.css';

export function Events() {
  const [text, setText] = useState('Nie kliknięto we mnie');
  const [counter, setCounter] = useState(0);
  const [inputText, setInputText] = useState('');

  function handleOnClick() {
    setText('Kliknięto we mnie');

    if (counter >= 3) {
      return setCounter((counter) => counter + 2);
    }

    setCounter((counter) => counter + 1);
  }

  function handleOnChange(event) {
    setInputText(event.target.value);
  }

  function handleGreeting() {
    alert(`Cześć 👋 ${inputText} 🥳`);
  }

  return (
    <div>
      <h2>Cześć! 👋</h2>
      <input
        className="events-input"
        type="text"
        onChange={(event) => handleOnChange(event)}
      />
      <button className="events-btn" onClick={handleGreeting}>
        Kliknij
      </button>
      <button className="events-btn" onClick={handleOnClick}>
        {counter > 0 ? `${text} ${counter} razy` : text}
      </button>
    </div>
  );
}
