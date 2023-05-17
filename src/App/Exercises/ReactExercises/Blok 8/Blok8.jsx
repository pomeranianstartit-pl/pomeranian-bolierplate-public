import React, { useState } from 'react';

import './style.css';

const style = {
  marginLeft: '140px'
}

export function Blok8() {

const wartosc = 5

const [ilosc, setIlosc] = useState(0);
const [text, setText] = useState ('tekst do wpisania')
const [placeholder, setPlaceholder] = useState ('Placeholder')
const [n1, setn1] = useState ('Podaj pierwszą liczbę')
const [n2, setn2] = useState ('Podaj drugą liczbę')
const [suma, setSuma] = useState (0)

  function clickHandler(ev) {
    // console.log('Kliknieto przycisk',ev)
    //alert ('kliknieto przycisk')
    setIlosc(ilosc+1)
  }
  function changeHandler(ev){
    // console.log(ev.target.value)
    setText(ev.target.value)
    setPlaceholder(ev.target.value)
  }
  function changeHandler1(ev)
  {
    console.log (ev.target.value)
    setn1(ev.target.value)
  }
  function changeHandler2(ev)
  {
    console.log (ev.target.value)
    setn2(ev.target.value)
  }
  function dodawanie(){
    const x1 = parseFloat(n1)
    const x2 = parseFloat(n2)
    const wynik = x1 + x2
    setSuma(wynik)
  }

  return (
    <div>
      {/* <p onClick={clickHandler}>Przyklad blok 8</p>
      <button onClick={clickHandler} type='button' >Przycisk</button>
      <p>
        {wartosc*2} 
        </p>*/}
        <h2>Cześć!</h2>
        <h4>Wpisz tekst</h4>

        <input value={text} onChange={changeHandler} placeholder='tekst do wpisania' />
        <span className='przesun'>
          {placeholder}
          </span>
        <br/>
        {/* <button className='btn' onClick={clickHandler} type='button' >
          Kliknieto mnie {ilosc} razy
          </button> */}
          <input value={n1} onChange={changeHandler1}/>
          <button onClick={dodawanie}>+</button>
          <input value={n2} onChange={changeHandler2}/>
          <button>=</button>
          {suma}
    </div>
  );
}
