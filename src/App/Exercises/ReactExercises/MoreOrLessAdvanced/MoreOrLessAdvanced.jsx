import React from 'react';

import './style.css';

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
