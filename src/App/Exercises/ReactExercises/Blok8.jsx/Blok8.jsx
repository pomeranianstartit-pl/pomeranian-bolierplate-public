import React, {useState} from 'react';


import './style.css';

export function Blok8() {

  const napis = 5

  const [ilosc, setIlosc] = useState(0);

function clickHandler(ev) {
  // console.log('Kliknieto przycisk', ev)
  // alert('klikieto przycisk')
  setIlosc(ilosc+1)
}

  return (
    <div>
      {/* <p>Przyklad blok 8</p>
      <button onClick={clickHandler} >przycisk</button>
      <p>{napis}</p> */}
      <h2>Cześć!</h2>
      <button className='btn' onClick = {clickHandler} type='button'>kliknieto mnie {ilosc} razy</button>
      {/* <span>NIE KLIKNIĘTO WE MNIE</span> */}
    </div>
  );
}
