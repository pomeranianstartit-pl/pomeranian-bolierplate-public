import React, {useState} from 'react';

import './style.css';

export function Blok9() {


  const [text, setText] = useState('Kliknij');
const [ilosc, setIlosc] = useState(0)
const [isClicked5, setClicked5] = useState(false)

const [argA, setArgA] = useState(0)
const [argB, setArgB] = useState(0)
const [odpowiedz, setOdpowiedz] = useState('Nie')

function clickHandler() {
  
  const nowa_ilosc = ilosc + 1
  setIlosc(nowa_ilosc)

  setText('kliknięto' + nowa_ilosc + 'razy')

  if (nowa_ilosc==5) {

setText('gratulacje wyklikales przyisk')
  }
  else {setText('kliknięto' + nowa_ilosc + 'razy')
  }}

  function handlerA(ev) {
    const wartosc = ev.target.value
    setArgA(ev.target.value)
    if (parseFloat(wartosc)>parseFloat(argB)){
      setOdpowiedz('Tak')

    }
    else{
      setOdpowiedz('Nie')
    }
  }
  function handlerB(ev) {
    const wartosc = ev.target.value
    setArgB(ev.target.value)

    if (parseFloat(wartosc)>parseFloat(argA)){
      setOdpowiedz('Tak')

    }
    else{
      setOdpowiedz('Nie')
    }
}

  return (
    <div>
     {/* <h2>Kliknij 5</h2> */}

     {/* <button onClick = {clickHandler} className='ifbtn'>{text}</button>
     {isClicked5 && <h2>Kliknales wiecej niz 5 razy</h2>}<br /> */}
<h2>
  Czy A jest większe od B?
</h2>
<input value={argA} on onChange={handlerA} placeholder='A' /><br />
<input value={argB} onChange={handlerB} placeholder='B' /><br />
{odpowiedz}
    </div>
   


    
  )
    }