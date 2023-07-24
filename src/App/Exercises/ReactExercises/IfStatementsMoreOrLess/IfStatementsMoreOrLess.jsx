import React, { useState } from 'react';

import './style.css';

export function IfStatementsMoreOrLess() {
  const [firstValue, setFirstValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);

  const handleFirstValue = (e) => {
    let inputValue = e.target.value;
    setFirstValue(inputValue++);
  };

  const handleSecondValue = (e) => {
    let inputValue = e.target.value;
    setSecondValue(inputValue++);
  };

  return (
    <div>
      <h2>Czy A jest większe od B</h2>
      <input type="number" value={firstValue} onChange={handleFirstValue} />
      <input type="number" value={secondValue} onChange={handleSecondValue} />
      <p>
        Odpowiedź:
        {/* {firstValue > secondValue
          ? 'Wartość A jest większa niż B'
          : firstValue === secondValue
          ? 'Wartość A jest równa B'
          : 'Wartość A jest mniejsza niż B'} */}
        {firstValue > secondValue && 'Wartość A jest większa niż B'}
        {firstValue < secondValue && 'Wartość A jest mniejsza niż B'}
        {firstValue === secondValue && 'Wartość A jest równa B'}
      </p>
    </div>
  );
}
