import React from 'react';

import './style.css';

export function MoreOrLessAdvanced() {
  const [isGreaterThanB, setIsGreaterThanB] = React.useState(false);
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
      setIsGreaterThanB(true);
    } else {
      setIsGreaterThanB(false);
    }
  }
  return (
    <div>
      <h2>Czy A jest większe od B</h2>
      A:
      <input
        type="number"
        placeholder="A"
        onChange={handleOnChangeA}
        defaultValue={0}
      />
      B:
      <input
        type="number"
        placeholder="B"
        onChange={handleOnChangeB}
        defaultValue={0}
      />
      <p>Odpowiedz:{a > b ? 'Tak' : 'Nie'}</p>
    </div>
  );
}
