import React from 'react';

import './style.css';

export function Cwiczenie1() {
  const [tekst, ustawZmiennaTekst] = React.useState(
    'Tutaj trafi tekst z inputa'
  );

  function x(cos) {
    cos.preventDefault();

    console.log(cos);
    const trescInputa = cos.target[0].value;
    console.log('Treść inputa: ', trescInputa);
    ustawZmiennaTekst(trescInputa);
  }

  return (
    <div className="blok-8__cwiczenie-1">
      <h1>Cześć!</h1>

      <div>
        <div>
          <p>Wpisz tekst</p>
          <form onSubmit={x}>
            <input type="text" placeholder="tekst do wpisania" />
            <button type="submit">KLIKNIJ</button>
          </form>
        </div>
        <div>
          <p>{tekst}</p>
        </div>
      </div>
    </div>
  );
}
