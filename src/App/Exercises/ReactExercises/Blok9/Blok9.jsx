import React, { useState } from 'react';

import './style.css';

export function Blok9() {
  const [ilosc, setIlosc] = useState(0);
  const [text, setText] = useState('Kliknij');
  const [isClicked5, setClicked5] = useState (false)
  const [pokaz, setPokaz]=useState (false)

  function ClickHandler() {
   const nowa_ilosc = ilosc +1 
   setIlosc(nowa_ilosc) 
  
    if (nowa_ilosc >= 5) {
      setClicked5(true)
      setText('Gratulacje wyklikałes przycisk');
    } else {
      setText('Kliknieto ' + nowa_ilosc + ' razy');
    }
  }
  function clickHandler2() {
    setPokaz (!pokaz)

  }


  return (
    <div>
      <h2>Kliknij 5 razy</h2>
      <button onClick={ClickHandler} className="ifbtn">{text}</button>
      {isClicked5 && <p> Kliknales wiecej niz 5 razy </p>}

      <h2> Czy A jest większe od B </h2>

      <h2> See or not </h2>
      <button onClick={clickHandler2} className='ifbtn'>Ukryj/pokaz</button>
      {pokaz && <p> Teraz mnie widać </p>}
      <h2> Jaką jestem liczbą? </h2>
    </div>
  );
}
