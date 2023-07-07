import React from 'react';

import './style.css';

export function Cwiczenie2() {
  const [number, setNumber] = React.useState(0);
  function handleOnClick(event) {
    event.preventDefault();
    console.log(event);

    setNumber(number + 1); // Co to jest za zapis
  }
  return (
    <div className="blok-8__cwiczenie-1">
      <h1>Cześć!</h1>

      <div>
        <button type="button" onClick={handleOnClick}>
          KLIKNIĘTO WE MNIE {number} RAZY
        </button>
      </div>
    </div>
  );
}
