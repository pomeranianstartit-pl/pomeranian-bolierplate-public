import React from 'react';

import './style.css';

export function Cwiczenie3() {
  const [display, setDisplay] = React.useState(true);

  function handleOnClick() {
    const odwroconaWartosc = !display; // jeśli display to true, to odwroconaWartosc to false, jeśli display to false, to odwroconaWartosc to true

    // bo !true to false, a !false to true

    setDisplay(odwroconaWartosc);
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
