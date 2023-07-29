import React from 'react';

import './style.css';

export function MoreOrLessAdvanced() {
  const [aIsGreaterThanB, setAIsGreaterThanB] = React.useState(false);
  const [a, setA] = React.useState(0);
  const [b, setB] = React.useState(0);

  function handleOnChangeA(event) {
    setA(event.target.value);
    determine(event.target.value, b);
  }
  function handleOnChangeB(event) {
    setB(event.target.value);
    determine(event.target.value, a);
  }

  function determine(event) {
    if (a > b) {
      setAIsGreaterThanB(true);
    } else {
      setAIsGreaterThanB(false);
    }
  }

  return (
    <div>
      <h2>Czy A jest większe od B?</h2>

      <input
        onChange={handleOnChangeA}
        type="number"
        placeholder="A"
        defaultValue={0}
      />

      <input
        onChange={handleOnChangeB}
        type="number"
        placeholder="B"
        defaultValue={0}
      />

      <p>Odpowiedź: {aIsGreaterThanB ? 'TAK' : 'NIE'}</p>
    </div>
  );
}
