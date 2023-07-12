import React from 'react';

import './style.css';

export function Cwiczenie2() {
  const [tekst, setTekst] = React.useState(
    'PlaceholderTutaj trafi tekst z inputa'
  );
  function handleOnSubmit(event) {
    event.preventDefault();

    console.log(event);

    const trescInputa = event.target[0].value;

    console.log('Treść inputa,', trescInputa);

    setTekst(trescInputa);
  }

  return (
    <div className="Czesc">
      <h1>Cześć!</h1>
      <div>
        <div className="button">
          <button type="">KLIKNIĘTO MNIE 0 RAZY</button>
        </div>
      </div>
    </div>
  );
}
