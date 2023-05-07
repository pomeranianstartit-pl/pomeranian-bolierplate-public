import React from 'react';

import './style.css';

export function blok8() {
  function clickHandler() {
    console.log('Kliknieto przycisk');
  }

  return (
    <div>
      <p>Przykładowy Route bloku 8</p>
      <button onClick={clickHandler}> Przycisk</button>
    </div>
  );
}
