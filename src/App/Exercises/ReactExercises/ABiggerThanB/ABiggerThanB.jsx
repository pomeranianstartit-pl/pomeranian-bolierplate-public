import { useState } from 'react';
import './styles.css';

export const ABiggerThanB = () => {
  const [valA, setValA] = useState(0);
  const [valB, setValB] = useState(0);

  const [result, setResult] = useState('');

  function compareNumbers(x, y) {
    if (x > y) {
      console.log('x > y');
      setResult('X jest większe od Y');
    } else if (x === y) {
      console.log('x === y');
      setResult('X jest równe Y');
    } else {
      console.log('x < y');
      setResult('X jest mniejsze od Y');
    }
  }

  function aChangeHandler(ev) {
    let a = ev.target.value;
    setValA(a);
    console.log('A = '.concat(a));

    compareNumbers(a, valB);
  }

  function bChangeHandler(ev) {
    let b = ev.target.value;
    setValB(b);
    console.log('B = '.concat(b));

    compareNumbers(valA, b);
  }

  return (
    <div>
      <h1>Czy A jest większe od B?</h1>
      <input placeholder="A" type="number" onChange={aChangeHandler}></input>
      <br />
      <input placeholder="B" type="number" onChange={bChangeHandler}></input>
      <h2>
        {'A: '}
        {valA}
      </h2>
      <h2>
        {'B: '}
        {valB}
      </h2>
      <h3>{result}</h3>
    </div>
  );
};
