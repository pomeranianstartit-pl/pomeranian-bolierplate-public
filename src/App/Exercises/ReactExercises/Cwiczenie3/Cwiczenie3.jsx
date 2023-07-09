import React from 'react';

import './style.css';
import { toHaveAttribute } from '@testing-library/jest-dom/dist/matchers';

export function Cwiczenie3() {
  const [display, setDisplay] = React.useState(true);

  function handleOnClick() {
    setDisplay(!display);
  }

  return (
    <div className="blok-8__cwiczenie-3">
      <h2>Cześć!</h2>

      <button onClick={handleOnClick}>Ukryj</button>

      {display === true && <p>Teraz mnie widać</p>}
    </div>
  );
}

// 0. Figma blok 9, makieta 2

// 1. HTML z przyciskiem "Ukryj" i tekstem "Teraz mnie widać"

// 2. Po kliknięciu w przycisk "Ukryj" tekst znika
