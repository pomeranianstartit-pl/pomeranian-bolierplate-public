import React, { useState } from 'react';

import './style.css';

function Wynik(props) {
  const liczba1 = parseFloat(props.arg1);
  const liczba2 = parseFloat(props.arg2);
  let napis;
  if (liczba1 > liczba2) {
    napis = 'Tak';
  }

  if (liczba1 == liczba2) {
    napis = 'Rowne';
  }
  if (liczba1 < liczba2) {
    napis = 'Nie';
  }

  return <h2>{napis}</h2>;
}

export function Blok9() {
  // const [ilosc, setIlosc] = useState(0);
  // const [text, setText] = useState('Kliknij');
  // const [isClicked5, setClicked5] =useState(false)
  // const [pokaz, setPokaz] =useState(false)

  const [argA, setArgA] = useState('');
  const [argB, setArgB] = useState('');
  // const [odpowiedz, setOdpowiedz] = useState('Nie');
  const [op, setOp] = useState('+');

  // let wynik;

  // function clickHandler() {
  //   const nowa_ilosc = ilosc + 1
  //   setIlosc(nowa_ilosc)

  //   if (nowa_ilosc>=5) {
  //     setText('gratulacje wyklikałeś przycisk');
  //     setClicked5(true)
  //   } else {
  //     setText('kliknieto ' + nowa_ilosc + 'razy');
  //   }
  // }

  // function clickHandler2() {
  //   setPokaz(!pokaz)
  // }

  function handlerA(ev) {
    setArgA(ev.target.value);
    const wartosc = ev.target.value;
    // setArgA(wartosc);
    // if (parseFloat(wartosc) > parseFloat(argB)) {
    //   setOdpowiedz('Tak')
    // } else {
    //   setOdpowiedz('Nie')
    // }
  }

  function handlerB(ev) {
    const wartosc = ev.target.value;
    setArgB(wartosc);
    // if (parseFloat(argA) > parseFloat(wartosc)) {
    //   setOdpowiedz('Tak')
    // } else {
    //   setOdpowiedz('Nie')
    // }
  }

  // if (parseFloat(argA)>parseFloat(argB)) {
  //   wynik = 'Tak'
  // } else {
  //   wynik = 'Nie'
  // }

  function handleOp(ev) {
    setOp(ev.target.value);
  }

  console.log(op);
  let wynik = 0;

  if (op == '+') {
    wynik = parseFloat(argA) + parseFloat(argB);
  }

  if (op == '-') {
    wynik = parseFloat(argA) - parseFloat(argB);
  }

  if (op == '*') {
    wynik = parseFloat(argA) * parseFloat(argB);
  }

  return (
    <div>
      {/* <h2>Kliknij 5</h2>
      <button onClick={clickHandler} className="ifbtn">Kliknij</button>
      
      {isClicked5 && <h2>Kliknałeś więcej niż 5 razy</h2>}
      <hr></hr>

      <button onClick={clickHandler2} className="ifbtn">Ukryj/pokaz</button>
      {pokaz && <p>Teraz mnie widac</p> } */}

      <h2>Czy A jest większe od B ?</h2>

      <input value={argA} onChange={handlerA} placeholder="A" />
      <br />
      <input value={argB} onChange={handlerB} placeholder="B" />
      <br />

      <select value={op} onChange={handleOp}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
      </select>

      <p>{wynik}</p>

      <Wynik arg1={argA} arg2={argB} />
    </div>
  );
}
