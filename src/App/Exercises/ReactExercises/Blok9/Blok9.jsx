import React, {useState} from 'react';

import './style.css';

export function Blok9() {

  const [ilosc, setIlosc] = useState(0);
  const [text, setText] = useState('Kliknij');
  const [isClicked5, setClicked5] = useState(false);
  const [pokaz, setPokaz] = useState(false);

  const [argA, setArgA] = useState(0);
  const [argB, setArgB] = useState(0);
  const [odpowiedz, setOdpowiedz] = useState('Nie');


  // const [text, setText] = useState('A')
  // const [placeholder, setPlaceholder] = useState('Placeholder')
  // const [answer1, setText] = useAnswer('Tak')
  // const [answer2 = 'Nie'
  
  // function clickHandler() {
  //   const nowa_ilosc = ilosc + 1;
  //   setIlosc(nowa_ilosc)
    
  //   if (nowa_ilosc==5) {
  //     setClicked5(true)
  //     setText('gratulacje uzytkowniku, wygrales iPhone6')
  //   } else {
  //     setText('kliknieto ' + nowa_ilosc + ' razy')
  //   }
  // }

  // function changeHandler(ev) {
  //     console.log(ev.target.value)
  //     setText(ev.target.value)
  //     setPlaceholder(ev.target.value)
  //   }

  // function clickHandler2() {
  //   // Wykrzyknik to negacja logiczna
  //   setPokaz(!pokaz)
  // }
    
  // function clickHandler() {
  //     if ({text}='10'){
  //     'Tak'
  //   } else {
  //     'Nie'
  //   }
  // }

  function handlerA(ev) {
    const wartosc = ev.target.value
    setArgA(wartosc);
    if (parseFloat(wartosc)>parseFloat(argB)) {
      setOdpowiedz('Tak')
    } else {
      setOdpowiedz('Nie')
    }
  }

  function handlerB(ev) {
    const wartosc = ev.target.value
    setArgB(wartosc);
    if (parseFloat(argA)>parseFloat(wartosc)) {
      setOdpowiedz('Tak')
    } else {
      setOdpowiedz('Nie')
    }
  }

  return (
    <div>

      <h2> Czy A jest większe od B?</h2>

      <input value={argA} onChange={handlerA} placeholder='A' /><br/>
      <input value={argB} onChange={handlerB} placeholder='B' /><br/>
      {odpowiedz}

      {/* <h2>
        Czy A jest większe od 10?
      </h2>
      <input value={text} onChange={changeHandler} placeholder='Wpisz liczbę A'/>
      <br />

      <p>Odpowiedź: {answer1} {answer2}</p> */}

    {/* //   <h2>
    //     Kliknij TU 5 razy aby wygrac iPhone6
    //   </h2>

    //   <button onClick={clickHandler} className='ifbutton'>{text}</button>
    //   {isClicked5 && <h2>Glupcze, kliknales wiecej niz 5 razy</h2>}
    //   <hr></hr>

    //   <button onClick={clickHandler2} className='ifbutton'>Ukryj/pokaz</button>
    //   {pokaz && <p>Teraz mnie widac</p>} */}
    </div>

  
  );
}
