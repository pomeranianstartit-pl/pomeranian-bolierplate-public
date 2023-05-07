import React, { useState } from 'react';

import './style.css';

// const style = {
//   marginLeft: '140px'
// }

export function Blok8() {

  const [ilosc, setIlosc] = useState(0);
  const [text, setText] = useState('tekst do wpisania')
  const [placeholder, setPlaceholder] = useState('Placeholder')
  const [n1, setN1] = useState('');
  const [n2, setN2] = useState('');
  const [wynik, setWynik] = useState('');

  

  // EV w nawiasie pozwala na wyświetlenie informacji w konsoli o zdarzeniach wystepujących przy wywołaniu funkcji
  // function clickHandler(ev) {
  //   // console.log('Kliknieto przycisk', ev)
  //   // alert('gratulacje uzytkowniku, wygrales iPhone 6')
  //   // setIlosc(ilosc+1)
  // }

  // function changeHandler(ev) {
  //   console.log(ev.target.value)
  //   setText(ev.target.value)
  //   setPlaceholder(ev.target.value)
  // }

 

function changeN1(ev) {
  setN1(ev.target.value)
}

function changeN2(ev) {
  setN2(ev.target.value)
}

function sum() {
  const z = parseFloat(n1)+parseFloat(n2);
  setWynik(z)
}

  return (
    <div>
    
      {/* <p onClick={clickHandler} >Przyklad blok 8</p>
      <button onClick={clickHandler}>Zobacz memy</button> */}
    
      <h2>
        Cześć!
      </h2>
      <h4>
        Wpisz tekst
      </h4>
    
      {/* teraz treść value się wyświetla w polu wpisywania, a podczas wpisywania, dzięki funkcji changeHandler, będzie się ????*/}
    
    {/* To moje robocze, nie do konca dziala
      <input value={text} onChange={changeHandler} placeholder='tu wpisz cos'/>
        {placeholder}
      <br />

      <input value={n1} n1='tu wpisz pierwsza liczbe'/>
        {n1}

      <button className='button' type='button'> + </button>
      
      <input value={n2} n2='tu wpisz cos'/>
        {n1}

      <button className='button' type='button'> = </button> */}

      <input value={n1} onChange={changeN1} />
      <input value={n2} onChange={changeN2} />
      <button onClick={sum}> + </button>
      <p>
        {wynik}
      </p>
      

     
     
      {/* <span style={style}>Placeholder</span> */}
      {/* <span style={{marginLeft: '140px'}}>Placeholder</span> */}
      {/* <span className='przesun'>{text}</span> */}
     
      <br />
     
      {/* <button className='button' onClick={clickHandler} type='button'>Kliknięto mnie {ilosc} razy</button> */}
      {/* <span className='button'>Nie kliknięto we mnie</span> */}
    
    </div>
  );
}
