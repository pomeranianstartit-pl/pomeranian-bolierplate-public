import React, { useState } from 'react';

import './style.css';

export function Blok8() {

  const [ilosc, setIlosc] = useState(0);

  function clickHandler(ev) {
    // console.log('Kliknieto przycisk', ev)
    // alert('gratulacje uzytkowniku, wygrales iPhone 6')
    setIlosc(ilosc+1)
  }

  return (
    <div>
      {/* <p onClick={clickHandler} >Przyklad blok 8</p>
      <button onClick={clickHandler}>Zobacz memy</button> */}
      <h2>
        Cześć!
      </h2>
      <button className='button' onClick={clickHandler} type='button'>Kliknięto mnie {ilosc} razy</button>
      {/* <span className='button'>Nie kliknięto we mnie</span> */}
    </div>
  );
}
