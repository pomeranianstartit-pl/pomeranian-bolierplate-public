import './styles.css';
import { useState } from 'react';

//TODO: Change function to compare whole number - function compare input digits

export const Compare = () => {
  const [numberA, setNumberA] = useState();
  const [numberB, setNumberB] = useState();
  const [answer, setAnswer] = useState('');
  function compareNumbers(numberA, numberB) {
    if (numberA > numberB) {
      setAnswer('A jest większe od B');
    } else if (numberB === numberA) {
      setAnswer('A i B są równe');
    } else {
      setAnswer('B jest większe od A');
    }
  }

  function aChangeHandler(ev) {
    let currentValue = ev.target.value;
    setNumberA(currentValue);
    compareNumbers(currentValue, numberB);
  }
  function bChangeHandler(ev) {
    let currentValue = ev.target.value;
    setNumberB(currentValue);
    compareNumbers(numberA, currentValue);
  }

  return (
    <div>
      <h2>Czy A jest większe od B?</h2>
      <input type="number" placeholder="A" onChange={aChangeHandler} />
      <br />
      <input type="number" placeholder="B" onChange={bChangeHandler} />
      <h4>Odpowiedź: {answer}</h4>
    </div>
  );
};
