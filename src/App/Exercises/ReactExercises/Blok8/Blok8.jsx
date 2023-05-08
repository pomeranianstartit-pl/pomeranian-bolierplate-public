import React, {useState} from 'react';

import './style.css';

const style = {
  marginLeft: '140px',
}
export function Blok8() {

  // const wartosc= 5
  const [ilosckliknec, setIlosc] = useState(0);
  const [text, setText] = useState('teskt do wpisania')
  const [Placeholder, setPlaceholder] = useState ('Placeholder')
  const [n1,setn1] = useState ('Podaj pierwsza liczbę');
  const [n2,setn2] = useState ('Podaj drugą liczbę');
  // cons [dodawanie,setdodawanie] = useState ('Wynik dodawania'); 
  const [suma, setSuma] = useState (0); 
  function clickHandler (ev) {
  // alert('kliknieto przycisk')
  console.log ('Klikneto przycisk, ev');
  setIlosc(ilosckliknec +1);
  }

  function changeHandler(ev) {
    console.log(ev.target.value);
    setText(ev.target.value);
    setPlaceholder (ev.target.value);
  }
  
  function changeHandler1 (ev)
  
  {
    console.log(ev.target.value);
    setn1(ev.target.value);
  }
  function changeHandler2 (ev) {
  console.log (ev.target.value);
  setn2(ev.target.value);
  }

  function dodawanie (){
  const x1 = parseInt(n1)
  const x2 = parseInt (n2)
  const wynik = x1 + x2; 
  setSuma(wynik);
}

  return (
    <div>
      <h2>Cześć</h2>
      <h4> Wpisz tekst </h4>

      <input 
      value ={text} 
      onChange={changeHandler}
      Placeholder="Tekst do wpisania"
      />
      <span className= "przesun">{text}</span>
      <br/>
    {/* <button className='btn' onClick={clickHandler} type="button"> Nie kliknieto we mnie {ilosc} razy </button>} */}
    <input value = {n1} onChange={changeHandler1}/>
    <button onClick={dodawanie}>+</button>
    <input value = {n2} onChange={changeHandler2}/>
    <button>=</button>
    {suma}
  </div>
  );
}
