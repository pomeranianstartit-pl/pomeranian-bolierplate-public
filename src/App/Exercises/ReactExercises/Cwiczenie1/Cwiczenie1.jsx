import React from 'react';

import './style.css';

export function Cwiczenie1() {
  const [tekst, setTekst] = React.useState('Tutaj trafi tekst z inputa');

  function handleOnSubmit(event) {
    event.preventDefault();

    console.log(event);

    const trescInputa = event.target[0].value;

    console.log('Treść inputa: ', trescInputa);

    setTekst(trescInputa);
  }

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

          <form onSubmit={handleOnSubmit}>
            <input
              type="text"
              placeholder="tekst do wpisania"
              onChange={handleOnChange}
            />

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
