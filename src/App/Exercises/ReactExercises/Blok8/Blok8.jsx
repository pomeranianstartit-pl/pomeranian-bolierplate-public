import React, { useState } from 'react';

import './style.css';
const style = {
  marginLeft: '140px',
};

export function Blok8() {
  // const wartosc = 5;

  const [ilosc, setIlosc] = useState(0);
  const [text, setText] = useState('tekst do wpisania');
  const [placeholder, setPlaceholder] = useState('tekst do wpisania');

  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [wynik, setWynik] = useState('')

  // function clikHandler(ev) {
    // console.log('Kliknieto przycisk', ev);
    // alert('kliknieto przycisk');
    // setIlosc(ilosc + 1);
  // }

  function changeHandler(ev) {
    console.log(ev.target.value);
    setText(ev.target.value);
    setPlaceholder(ev.target.value);
  }

  function changeNum1(ev) {
    setNum1(ev.target.value);
  }

  function changeNum2(ev) {
    setNum2(ev.target.value);
  }

  function dodaj(){
    const z = parseFloat(num1) + parseFloat(num2);
    setWynik(z)
  }


  return (
    <div>
      {/* <p onClick={clikHandler}>Przykładowy blok 8</p>
      <button onClick={clikHandler} type="button">
        Przycisk
      </button>
      <p>{wartosc*2}</p> */}
      {/* <h2>Cześć</h2>
      <h4>Wpisz tekst</h4>

      <input value={text} onChange={changeHandler} placeholder='tekst do wpisania' />
      <span className='przesun'>
        {placeholder}
      </span>
      <br />
      <button className="btn" onClick={clikHandler} type="button">
        Kliknieto mnie {ilosc} razy
      </button> */}
     
      <input value={num1} onChange={changeNum1} />
      <input value={num2} onChange={changeNum2} />
      <button onClick={dodaj}> Dodaj</button>
      <p>
        {wynik}
      </p>

    </div>
  );
}
