import React from 'react';

import './style.css';

export function Cwiczenie1() {
  function handleOnSubmit(event) {
    event.preventDefault();
    console.log('Kliknięto przycisk');
    console.log(event);
  }

  return (
    <div className="blok-8__cwiczenie-1">
      <h1>Cześć!</h1>
      <div>
        <div>
          <p>Wpisz tekst</p>
          <form onSubmit={handleOnSubmit}>
            <input type="text" placeholder="tekst do wpisania" />
            <button type="submit">KLIKNIJ</button>
          </form>
        </div>

        <div>
          <p>Placeholder</p>
        </div>
      </div>
    </div>
  );
}
