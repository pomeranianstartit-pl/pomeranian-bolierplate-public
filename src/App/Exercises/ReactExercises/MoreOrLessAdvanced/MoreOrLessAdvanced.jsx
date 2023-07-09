import React from 'react';

import './style.css';

export function Cwiczenie4Advanced() {
  const [inputA, setInputA] = React.useState(0);

  const [inputB, setInputB] = React.useState(0);

  function handleInputAChange(event) {
    const number = event.target.value;

    setInputA(number);
  }

  function handleInputBChange(event) {
    const number = event.target.value;

    setInputB(number);
  }

  return (
    <div>
      <h2>Czy A jest większe od B?</h2>

      <div className="columns">
        <form>
          <input type="number" placeholder="A" onChange={handleInputAChange} />

          <input type="number" placeholder="B" onChange={handleInputBChange} />
        </form>

        {inputA !== inputB && (
          <p>Odpowiedź: {inputA > inputB ? 'A' : 'B'} jest większe</p>
        )}

        {inputA === inputB && <p>Odpowiedź: A i B są równe</p>}
      </div>
    </div>
  );
}

export function MoreOrLessAdvanced() {
  const [a, setA] = React.useState(0);

  const [b, setB] = React.useState(0);

  function handleOnChangeA(event) {
    setA(event.target.value);
  }

  function handleOnChangeB(event) {
    setB(event.target.value);
  }

  return (
    <div>
      <h2>Czy A jest większe od B?</h2>

      <input
        type="number"
        placeholder="A"
        onChange={handleOnChangeA}
        defaultValue={0}
      />

      <input
        type="number"
        placeholder="B"
        onChange={handleOnChangeB}
        defaultValue={0}
      />

      <p>Odpowiedź: {a > b ? 'TAK' : 'NIE'}</p>
    </div>
  );
}
