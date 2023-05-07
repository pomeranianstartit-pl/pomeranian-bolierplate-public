import React, {useState} from 'react';

import './style.css';

function Wynik(props) {
  const liczba1 = parseFloat(props.arg1)
  const liczba2 = parseFloat(props.arg2)
  let napis;
  if (liczba1>liczba2) {
    napis = 'Tak'
  }
  
  if (liczba1==liczba2) {
    napis = 'Są równe'
  } 
  
  if (liczba1<liczba2) {
    napis = 'Nie'
  }

  return <h2>{napis}</h2>
}

export function Blok9() {

  const [text, setText] = useState('Kliknij')
  const [ilosc, setIlosc] = useState(0)
  const [isClicked5, setClicked5] = useState(false)
  const [pokaz, setPokaz] = useState(false)

  const [x, setX] = useState()
  const [check, setCheck] = useState(false)
  const [odp, setOdp] = useState('')

  const [argA, setArgA] = useState()
  const [argB, setArgB] = useState()
  const [odpowiedz, setOdpowiedz] = useState('')

  const [op, setOp] = useState("+")

  let wynik;

  function clickHandler() {
    const nowa_ilosc = ilosc+1
    setIlosc(nowa_ilosc)
    setText('Kliknięto '+ nowa_ilosc+ ' razy.')

    if (nowa_ilosc>=5) {
      setClicked5(true)
      setText('Gratulacje! Wyklikałeś przycisk!')
    } else {
      setText('Kliknięto '+ nowa_ilosc+ ' razy.')
    }
  }

  function clickHandler2() {
    setPokaz(!pokaz)
  }

  function checkHandler(ev) {
    setX(ev.target.value)
  }

  function checkAnswer() {
    if (x<=10) {
      setCheck(check)
      setOdp('Nie')
  } else {
    setCheck(!check)
    setOdp('Tak')
  }}

  function handlerA(ev) {
    const wartosc = ev.target.value
    setArgA(wartosc)
    if (parseFloat(wartosc)>parseFloat(argB)) {
      setOdpowiedz('Tak')
    } else {
      setOdpowiedz('Nie')
    }

  }

  function handlerB(ev) {
    const wartosc = ev.target.value
    setArgB(wartosc)
    if (parseFloat(wartosc)<parseFloat(argA)) {
      
    }
  }

  function handleOp(ev) {
    setOp(ev.target.value);
  }

  console.log(op)
  let wynik_2 = 0

  if (op=='+') {
    wynik_2 = parseFloat(argA) + parseFloat(argB)
  }
  if (op=='-') {
    wynik_2 = parseFloat(argA) - parseFloat(argB)
  }
  if (op=='*') {
    wynik_2 = parseFloat(argA) * parseFloat(argB)
  }
  if (op=='/') {
    wynik_2 = parseFloat(argA) / parseFloat(argB)
  }

  return (
    <div>
      <h2>Kliknij 5 razy</h2>
      <button className='ifbtn' onClick={clickHandler}>{text}</button>
      {isClicked5 && <h2>Kliknąłeś więcej niż 5 razy</h2>}

      <hr />
      <h2>Przycisk pokazujący i chowający tekst</h2>
      <button className='ifbtn' onClick={clickHandler2}>Ukryj/pokaż</button>
      {pokaz && <p>Teraz mnie widać</p>}

      <hr />
      <h2>Czy X jest większy od 10?</h2>
      <input value={x} onChange={checkHandler} placeholder='podaj liczbę'/>
      <button className='ifbtn' onClick={checkAnswer}>Sprawdź!</button>
      <p>Odpowiedź: {odp} </p>

      <hr />
      <h2>Czy A jest większe od B?</h2>
      <input value={argA} onChange={handlerA} placeholder='A'/><br/>
      <input value={argB} onChange={handlerB} placeholder='B'/><br/>
      <select value={op} onChange={handleOp}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>

      <p>
        {wynik_2}
      </p>

      <Wynik arg1={argA} arg2={argB}/>

      
    </div>
  );
}
