import React, { useState } from 'react';

import './style.css';

export function ReactRouterEvents() {
  const [getCount, setCount] = useState(10);

  function handleClickButton(event) {
    return console.log('jest cklick');
  }

  function handleOnChangeInput(event) {
    const inputValue = event.target.value;
    console.log('event', event);
    return console.log('Wprowadzona wartość w input: ', inputValue);
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
        <div className="header1">
          <h1>Cześć !</h1>
        </div>
        <div className="label">
          <label for="tekst-input">Wpisz tekst</label>
        </div>
        <div className="input-field">
          <input
            type="text"
            id="tekst-"
            name="tekst-input"
            placeholder="tekst do wpisania"
            onChange={handleOnChangeInput}
          />
        </div>
        <div className="button">
          <input onClick={handleClickButton} type="button" value="KLIKNIJ" />
        </div>
      </div>
      <div className="counter--container">
        <p>Licznik {getCount}</p>
        <input
          onClick={handleIncrement}
          type="button"
          value={
            getCount === 0
              ? `Kliknieto we mnie ${getCount} razy`
              : `Super klinięto we mnie wiele razy - ${getCount}`
          }
        />
        <input onClick={handleDecrement} type="button" value="Decrement" />
      </div>
    </>
  );
}
