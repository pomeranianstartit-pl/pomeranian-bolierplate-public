import React, { useState } from 'react';

import './style.css';

// 1. Dodać element <button>Jakiś tekst</button>
// 2. Import useState z React
// 3. Zadeklarowanie zmiennej która będzie przetrzymywać stan
// 4. Zadeklarowanie zmiennej która będzie funkcją zmieniającą stan
// 5. Ostylować

export function Events() {
  const [text, setText] = useState('nie kliknięto we mnie ');
  const [counter, setCounter] = useState(0);
  const [inputText, setInputText] = useState('');


  function handleOnClick() {
   setText('Kliknięto we mnie ');
   counter >= 3
      ? setCounter((counter) => counter + 2)
      : setCounter((counter) => counter + 1);
  }

  function handleOnChange(event) {
    setInputText(event.target.value);
  }
  function handleGreeting() {
    alert(`Cześć👋 ${inputText}`);
  }


  return (
    <div>
      <h2>Cześć! 👋</h2>
      <input className="events-input" type="text" onChange={(event) => handleGreeting}/>
      <button className="events--btn" onClick={handleGreeting}>'kliknij'</button>
      <button className="events--btn" onClick={handleOnClick}>
       {counter > 0 ? `${text} ${counter} razy` : text}
      </button>
    </div>
  );
  }