import React, { useState } from 'react';

import './style.css';

// const style = {
//   marginLeft: '240px',
// }

export function Blok8() {
  // const wartosc = 5

  const [ilosc, setIlosc] = useState(0);
  const [text, setText] = useState('')
  const [placeholder, setPlaceholder] = useState('Placeholder')
  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')
  const [sum, setSum] = useState('')

  function clickHandler(ev) {
    // console.log('Kliknieto przycisk', ev);
    // alert('Kliknięto przycisk')
    setIlosc(ilosc+1)
  }

  function changeHandler(ev) {
    console.log(ev.target.value);
    setText(ev.target.value)
    setPlaceholder(ev.target.value)
  }

  function sumNumbers(ev) {
    const value = Number.parseFloat(num1) + Number.parseFloat(num2)
    setSum(value)
  }

  function changeNum1(ev) {
    setNum1(ev.target.value)
  }

  function changeNum2(ev) {
    setNum2(ev.target.value)
  }

  return (
    <div>
      {/* <p onClick={clickHandler}>Przykład blok 8</p>
      <button onClick={clickHandler} type="button">Przycisk</button>
      <p> 
        {wartosc*2}
      </p> */}
      <h2>Cześć!</h2>
      <h4>Wpisz tekst</h4>
      <input value={text} onChange={changeHandler} placeholder='tekst do wpisania'/>
      <span className='przesun'>{placeholder}</span>
    <br />
      {/* <button onClick={clickHandler} type="button" className='btn'>
        Kliknięto mnie {ilosc} razy
        </button> */}

    <h4>Sumowanie podanych wartości</h4>

    <input value={num1} onChange={changeNum1} placeholder='podaj liczbę'/>
    <input value={num2} onChange={changeNum2} placeholder='podaj liczbę'/>

    <button onClick={sumNumbers} type="button" className='btn'>
        Dodaj podane liczby
        </button>
      <p>{sum}</p>
    </div>
  );
}
