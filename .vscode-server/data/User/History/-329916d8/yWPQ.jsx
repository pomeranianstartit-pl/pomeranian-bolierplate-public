import React, { useState } from 'react';

import './style.css';

export function Exercise4() {
  const [valueA, setValueA] = useState(0);
  const [valueB, setValueB] = useState(0);
  const [biggerValue, setBiggerValue] = useState(false);
  const handleChangeA = (event) => {
    setValueA(event.target.value);
  };
  const handleChangeB = (event) => {
    setValueB(event.target.value);
    if (valueB > valueA) {
      setBiggerValue(true);
    } else {
      setBiggerValue(false);
    }
  };
  return (
    <div>
      <h1>Czy A jest większe od B?</h1>
      <label>A:</label>
      <input type="number" name="A" onChange={handleChangeA} />
      <label>B:</label>
      <input type="number" name="B" />
      <p>
        Odpowiedź: {text1} jest większe od {text2}
      </p>
    </div>
  );
}
