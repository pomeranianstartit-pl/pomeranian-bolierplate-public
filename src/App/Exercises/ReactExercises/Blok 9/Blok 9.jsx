import React, {useState} from 'react';

import './style.css';

export function Blok9() {
  const[ilosc, setIlosc] = useState(0);
  const [text, setText] = useState('Kliknij');
  const[isClicked5, setClicked5] = useState(false)
  const[pokaz, setPokaz] = useState(false)
  const[liczba, setliczba] = useState('Podaj liczbę');
  const[text1, setText1]= useState('Nie');

  function clickHandler2() {
    setPokaz(!pokaz)
      
  }
  function clickHandler () {
    const nowa_ilosc = ilosc +1
    setIlosc (ilosc+1)

    if (nowa_ilosc>=5){
      setClicked5(true)
      setText('Gratulacje, wyklikałeś przycisk!')
    } else {
      setText ('kliknięto ' + nowa_ilosc + ' razy')
    }
    }
    function clickHandler3(ev){
      setliczba(ev.target.value)
      if (liczba > 10) {
        setText1('Tak');
      }else {
        setText1('Nie');
      }
  }

  return (
    <div>
      
      <h2>Kliknij 5</h2>
      <button onClick = {clickHandler} className='ifbtn'>{text}</button>
      {isClicked5 && <h2>Kliknąłeś więcej niż 5 razy</h2>}
      <hr></hr>
      <button onClick = {clickHandler2} className='ifbtn'>Ukryj/pokaz</button>
      {pokaz && <p>Teraz mnie widać</p> }
      <hr></hr>
      <input value={liczba}onChange={clickHandler3}></input>
      <br></br>
      {text1}
    </div>
  );
}
