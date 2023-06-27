import React, { useState } from 'react';

import './style.css';

export function ReactRouterEvents() {
  const [getCount, setCount] = useState(0);

  function handleClickButton(event) {
    return console.log('jestem kliknięty');
  }

  function handleOnChangeInput(event) {
    //const inputValue = event.target.value;
    //console.log('event.target.value', event);
    return; //console.log('wprowadzona wartość input:', inputValue);
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
      <br />
      <br />
      <br />
      <div className="counter--conteiner">
        <p>Licznik: {getCount}</p>
        <input
          onClick={handleIncrement}
          type="button"
          value={
            getCount === 0
              ? `kliknięto we mnie ${getCount} razy `
              : `Super kliknięto we mnie wiele razy - ${getCount}`
          }
        ></input>
        <input
          onClick={handleDecrement}
          type="button"
          value="Decrement"
        ></input>
      </div>
    </>
  );
}
