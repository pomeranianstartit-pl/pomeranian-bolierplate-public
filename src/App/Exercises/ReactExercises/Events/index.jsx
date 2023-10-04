import React, { useState } from 'react';

import './style.css';

// 1. Dodać element <button>Jakiś tekst</button>
// 2. Import useState z React
// 3. Zadeklarowanie zmiennej która będzie przetrzymywać stan
// 4. Zadeklarowanie zmiennej która będzie funkcją zmieniającą stan
// 5. Ostylować

export function Events() {
  const [text, setText] = useState('Nie kliknięto we mnie');
  const [counter, setCounter] = useState(0);
  const [textInput, setInput] = useState('Wprowadź tekst');

  function handleOnClick() {
    setText('Kliknięto we mnie');
    setCounter((counter) => counter + 1);
  }

  function handleOnChange(event) {
    setInput(event.target.value);
  }

  function handleGreeting() {
    alert(`Hej  ${textInput}`);
  }

  return (
    <div>
      <h2>Cześć! 👋</h2>
      <input
        type="text"
        className="events-input"
        onChange={(event) => handleOnChange(event)}
        value={textInput}
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
