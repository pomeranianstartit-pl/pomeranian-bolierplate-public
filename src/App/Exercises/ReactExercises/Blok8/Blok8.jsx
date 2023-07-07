import React, {useState} from 'react';


import './style.css';
const style = { marginLeft: '140px'
};
export function Blok8() {

  const napis = 5

 
  const[num1, setNum1] = useState('')
  const[num2, setNum2] = useState('')
  const[wynik, setWynik] = useState('')
  const[wynik2, setWynik2] = useState('')
  const[num3, setNum3] = useState('')
  const[num4, setNum4] = useState('')
  const[inputText, setText] = useState('')
  const[Text, setText2] = useState('')

  const[argA, setArgA] = useState('')
  const[argB, setArgB] = useState('')
  const[odpowiedz, setOdpowiedz] = useState('Nie')


function changeNum4(ev){
  setNum4(ev.target.value)
}

function handlerA(ev) {
  const wartosc = (ev.target.value)
  setArgA(wartosc);
  if (parseFloat(wartosc)>parseFloat(argB)){
    setOdpowiedz('Tak')
  }
  else{
    setOdpowiedz('Nie')
  }
}
function handlerB(ev){
  const wartosc = (ev.target.value)
  setArgB(wartosc);
  if (parseFloat(argA)>parseFloat(wartosc)){
    setOdpowiedz('Tak')
  }
  else {
    setOdpowiedz('Nie')
  }
}

function changeNum3(ev){
  setNum3(ev.target.value)
}

function changeNum1(ev){
  setNum1(ev.target.value)
}
function changeNum2(ev) {
  setNum2(ev.target.value)
}

function odejmij(){
  const y = parseFloat(num3)-parseFloat(num4)
  setWynik2(y)
}

function changeText(ev) {
  setText(ev.target.value)
}

function dodaj() {
  const z = parseFloat(num1)+parseFloat(num2)
  setWynik(z)
}

  
    return (

       <div>
      <input value={num1} onChange={changeNum1} />
      <input value={num2} onChange={changeNum2} />
      <button onClick={dodaj}>Dodaj</button>
      
      <p>
      
      {wynik}
      
     </p>

     <p> 
      
      <input value={num3} onChange={changeNum3} />
      <input value={num4} onChange={changeNum4} />
      <button onClick={odejmij}>Odejmij</button>
      
    </p>
    <p>

    {wynik2}

    </p>
    <p></p>

    
  

      <h1>
        Cześć!
      </h1>

      <h2>
        Wpisz tekst
      </h2><br />
    <input value={Text} onChange={setText2} ></input> 
    <input placeholder={setText2}></input><br />


    <h2>Czy a jest większe od B?</h2>

    <input value={argA} onChange={handlerA} placeholder = 'A' /> <br />
    <input value={argB} onChange={handlerB} placeholder = 'B' />  <br />  
    {odpowiedz} 

    
      </div>

    
      
  
  );


}
