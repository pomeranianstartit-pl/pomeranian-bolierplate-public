import React, { useState } from 'react';

import './style.css';

export function Exercise4() {
  const [valueA, setvalueA] = useState(0);
  const [valueB, setvalueB] = useState(0);
  const handleChangeA = (event) => {};
  const handleChange = (event) => {};
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
