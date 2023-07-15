import React from 'react';
import './style.css';
export function Cwiczenie3() {
  const [display, setDisplay] = React.useState(true);
  function handleOnClick() {
    setDisplay(!display);
    // bo !true to false, a !false to true
  }
  let buttontext = 'ukryj';

  if (display === false) {
    buttontext = 'pokaz';
  }

  return (
    <div className="blok-8__cwiczenie-3">
      <h2>Cześć!</h2>

      <button onClick={handleOnClick}>{buttontext}</button>

      {display === true && <p>Teraz mnie widać</p>}
    </div>
  );
}
