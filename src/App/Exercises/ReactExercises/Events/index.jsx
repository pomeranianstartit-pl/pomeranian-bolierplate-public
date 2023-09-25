import React, { useState } from 'react';

import './style.css';

export function Events() {
  const [text, setText] = useState('Nie kliknięto we mnie');
  const [counter, setCounter] = useState(0);
  const [inputText, setInputText] = useState('');

  const handleOnClick = () => {
    setText('Kliknięto we mnie');
    counter > 3
      ? setCounter((counter) => counter + 2)
      : setCounter((counter) => counter + 1);
  };

  function handleOnChange(event){
    setInputText(event.target.value);
  };

  const greeting = () => {
    alert(`Czy miałeś na myśli ${inputText}?`)
  };

  return (
    <div>
      <h2>Cześć! </h2>
      <p>Wpisz tekst</p>
      <input
        onChange={(event) => handleOnChange(event)}
        type="text"
        placeholder="tekst do wpisania"
      />
      <div>
        <button onClick={greeting}>Enter</button>
        <button onClick={handleOnClick}>
          {/* <span>{text}</span> {counter > 0 && <span>{counter} razy</span>} */}
          {counter > 0 ? `${text} ${counter} razy` : text}
        </button>
      </div>
    </div>
  );
}
