import React, { useState } from 'react';

import './style.css';

export function ReactRouterEvents() {
  const [getCount, setCount] = useState(0);

  function handleClickButton(event) {
    return console.log('Jestem klikniętym buttonem');
  }

  function handleOnChangeInput(event) {
    const inputValue = event.target.value;
    return console.log('Wprowadzona coś:', inputValue);
  }

  function handleIncrement() {
    setCount(getCount + 1);
  }
  function handleDecrement() {
    setCount(getCount - 1);
  }

  return (
    <>
      <div className="form--container">
        <h1>Cześć!</h1>
        <label for="textInput">Wpisz tekst</label>
        <input
          id="textInput"
          type="text"
          name="textInput"
          placeholder="tekst do wpisania"
          onChange={handleOnChangeInput}
        />

        <input onClick={handleClickButton} type="button" value="KLIKNIJ" />
      </div>

      <br />
      <br />

      <div className="counter--cointainer">
        <p>Licznik: {getCount}</p>
        <input onClick={handleIncrement} type="button" value="Increment" />
        <input onClick={handleDecrement} type="button" value="Decrement" />
      </div>
    </>
  );
}
