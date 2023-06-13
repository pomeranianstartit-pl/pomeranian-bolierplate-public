import './styles.css';
import { useState } from 'react';

export const AorB =() => {
  const [numberA, setNumberA] =useState(0)
  const [numberB, setNumberB] =useState(0)
  const [answer, setAnswer] =useState('')
  
  function compareNumbers(numberA,numberB) {
    if (numberA>numberB) {
      setAnswer('A jest większe od B')
    }
    else if (numberB=numberA) {
      setAnswer('A i B są równe')}
    else {
      setAnswer('B jest większe od A')
    }
  }
  
  
  function aChangeHandler (ev) {
    let currentValue = ev.target.value;
    setNumberA(currentValue);
    compareNumbers(numberA,numberB);
  }
  function  bChangeHandler (ev) {
    let currentValue = ev.target.value;
    setNumberB(currentValue);
    compareNumbers(numberA,numberB);
  }
  
  

  
  return (
    <div>
      <h2>Czy A jest większe od B?</h2>
      <input type="number" placeholder='A'/>
      <br />
      <input type="number" placeholder='B' />
      <h4>Odpowiedź: {answer}</h4>
    </div>);

};
