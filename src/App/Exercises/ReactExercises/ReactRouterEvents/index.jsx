import React, { useState } from 'react';

import './style.css';

export function ReactRouterEvents() {
  const [getCount, setCount] = useState(0);

  function handleClickButton(event) {
    return; //console.log('jestem klikniętym buttonem');
  }

  function handleOnChangeInput(event) {
    const inputValue = event.target.value;
    //console.log('event', event);
    return; //console.log('Wprowadzona wartość w input:', inputValue);
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

        <label for="lname">Wpisz tekst</label>
        <input
          type="text"
          id="textInput"
          name="textInput"
          placeholder="tekst do wpisania"
          onChange={handleOnChangeInput}
        />

        <input onClick={handleClickButton} type="button" value="KLIKNIJ" />
      </div>

      <div className="counter--container">
        <p>Licznik: {getCount}</p>
        <input
          onClick={handleIncrement}
          type="button"
          value={
            getCount === 0
              ? `Kliknięto we mnie ${getCount} razy`
              : `Super kliknieto we mnie wiele razy - ${getCount}`
          }
        />
        <input onClick={handleDecrement} type="button" value="Decrement" />
      </div>
    </>
  );
}
