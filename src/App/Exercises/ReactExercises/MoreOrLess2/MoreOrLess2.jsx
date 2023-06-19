import { useState } from 'react';
import './styles.css';

export const MoreOrLess2 = () => {
  const [numberA, setNumberA] = useState();
  const [numberB, setNumberB] = useState();
  const [answer, setAnswer] = useState('');

  function isGreatherThan(a, b) {
    if (!a || !b) {
      setAnswer(' Uzupełnij dane ');
      return;
    }

    if (a > b) {
      setAnswer(a.concat(' jest większe od ', b));
    } else if (a === b) {
      setAnswer(a.concat(' jest równe ', b));
    } else {
      setAnswer(b.concat(' jest większe od ', a));
    }
  }

  function aChangeHandler(ev) {
    let currentValue = ev.target.value;
    setNumberA(currentValue);

    isGreatherThan(currentValue, numberB);
  }

  function bChangeHandler(ev) {
    let currentValue = ev.target.value;
    setNumberB(currentValue);

    isGreatherThan(numberA, currentValue);
  }

  return (
    <div>
      <h1>Czy A jest większe od B?</h1>
      <input placeholder="A" type="number" onChange={aChangeHandler}></input>
      <br />
      <input placeholder="B" type="number" onChange={bChangeHandler}></input>
      <h2>
        Odpowiedź: <span style={{ color: 'green' }}>{answer}</span>
      </h2>
    </div>
  );
};