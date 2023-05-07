import React, { useState } from 'react';

import './style.css';

export function Blok8() {
  // const wartosc = 5;

  const [ilosc, setIlosc] = useState(0);

  function clikHandler(ev) {
    console.log('Kliknieto przycisk', ev);
    // alert('kliknieto przycisk');
    setIlosc(ilosc + 1);
  }

  return (
    <div>
      {/* <p onClick={clikHandler}>Przykładowy blok 8</p>
      <button onClick={clikHandler} type="button">
        Przycisk
      </button>
      <p>{wartosc*2}</p> */}
      <h2>Cześć</h2>
      <button className="btn" onClick={clikHandler} type="button">
        Kliknieto mnie {ilosc} razy
      </button>
    </div>
  );
}
