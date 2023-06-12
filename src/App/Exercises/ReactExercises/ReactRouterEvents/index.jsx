import React from 'react';

import './style.css';

export function ReactRouterEvents() {
function handleClickButton(event){
  return console.log("jestem kliknięty")
}

function handleOnChangeInput(event){
  const inputValue = event.target.value;
  console.log("event.target.value", event);
  return console.log("wprowadzona wartość input:", inputValue);
}

  return (
    <div className="form--container">
      <h1>Cześć!</h1>

      <label for="text-input">Wpisz tekst:</label>
      <input
        type="text"
        id="text-input"
        name="text-input"
        placeholder="wpisz wartość"
        onChange={handleOnChangeInput}
      />

      <input onClick={handleClickButton} type="button" value="KLIKNIJ" />
    </div>
  );
}
