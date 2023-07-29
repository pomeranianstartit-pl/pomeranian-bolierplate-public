import React from 'react';

import './style.css';

export function Cwiczenie3() {
  const [display, setDisplay] = React.useState(true);

  function handleOnClick() {
    setDisplay(!display);
  }
  let buttonText = 'Ukryj';

  if (display === false) {
    buttonText = 'Pokaz';
  }

  return (
    <div className="blok-8__cwiczenie-3">
      <h2>Cześć!</h2>

      <button onClick={handleOnClick}>{buttonText}</button>

      {display === true && <p>Teraz mnie widac</p>}
    </div>
  );
}
