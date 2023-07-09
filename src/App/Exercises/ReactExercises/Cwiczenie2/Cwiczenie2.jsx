import React from 'react';

import './style.css';

export function Cwiczenie2() {
  const [counter, setCounter] = React.useState(0);

  function handleOnClick() {
    setCounter(counter + 1);
  }
  return (
    <div className="blok-8_Cwiczenie2">
      <h1>Cześć!</h1>

      <button onClick={handleOnClick} type="submit">
        KLIKNIĘTO WE MNIE {counter} RAZY
      </button>
    </div>
  );
}
