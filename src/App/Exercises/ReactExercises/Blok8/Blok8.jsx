import React, {useState} from 'react';

import './style.css';

export function Blok8() {

  const wartosc= 5
  const [ilosc, setIlosc] = useState(0);

  function clickHandler (ev) {
  // console.log('Kliknieto przycisk', ev)
  // alert('kliknieto przycisk')
  setIlosc(ilosc+1)
  }
  return (
    <div>
      <h2>Cześć</h2>
      <button className='btn' onClick={clickHandler} type="button"> Nie kliknieto we mnie {ilosc} razy </button>

    </div>
  );
}
