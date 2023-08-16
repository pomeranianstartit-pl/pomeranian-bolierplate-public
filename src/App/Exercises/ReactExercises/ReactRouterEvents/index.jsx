import React, { useState } from 'react';

import './style.css';
import { Link } from 'react-router-dom';

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
      <h2 className="todo-container__title">
        <Link to="/exercises/react">⯇ React Router Events</Link>
      </h2>
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
