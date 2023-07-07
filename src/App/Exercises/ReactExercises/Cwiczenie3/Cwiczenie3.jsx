import React from 'react';

import './style.css';

export function Cwiczenie3() {
  const [tekst, setTekst] = React.useState('Tutaj trafi tekst z inputa');

  function handleOnChange(event) {
    console.log(event);

    const trescInputa = event.target.value;

    setTekst(trescInputa);
  }

  return (
    <div className="blok-8__cwiczenie-1">
      <h1>Cześć!</h1>

      <div>
        <div>
          <p>Wpisz tekst</p>

          <form onSubmit={handleOnChange}>
            <input
              type="text"
              placeholder="tekst do wpisania"
              onChange={handleOnChange}
            />
          </form>
        </div>

        <div>
          <p>{tekst}</p>
        </div>
      </div>
    </div>
  );
}
