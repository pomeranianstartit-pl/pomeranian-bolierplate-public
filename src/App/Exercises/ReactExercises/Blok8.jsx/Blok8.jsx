import React, {useState} from 'react';


import './style.css';
const style = { marginLeft: '140px'
};
export function Blok8() {

  const napis = 5

 
  const[num1, setNum1] = useState('')
  const[num2, setNum2] = useState('')
  const[wynik, setWynik] = useState('')



function changeNum1(ev){
  setNum1(ev.target.value)
}
function changeNum2(ev) {
  setNum2(ev.target.value)
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
      
      </div>
      
  
  );
}
