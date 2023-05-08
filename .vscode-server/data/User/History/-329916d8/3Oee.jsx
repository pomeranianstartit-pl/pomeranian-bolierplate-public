import React, { useState } from 'react';

import './style.css';

export function Exercise4() {
  const [valueA, setValueA] = useState(0);
  const [valueB, setValueB] = useState(0);
  const [isBBiggerThanA, seIsBBiggerThanA] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);
  const handleChangeA = (event) => {
    setValueA(event.target.value);
    if (valueA > valueB) {
      seIsBBiggerThanA(false);
      setIsEmpty(false);
    } else if (valueA === '' || valueB === '') {
      setIsEmpty(true);
    } else {
      seIsBBiggerThanA(true);
      setIsEmpty(false);
    }
  };
  const handleChangeB = (event) => {
    setValueB(event.target.value);
    if (valueB > valueA) {
      seIsBBiggerThanA(true);
      setIsEmpty(false);
    } else if (valueA === '' || valueB === '') {
      setIsEmpty(true);
    } else {
      seIsBBiggerThanA(false);
      setIsEmpty(false);
    }
  };
  const text1 = isBBiggerThanA ? 'B ' : 'A ';
  const text2 = isBBiggerThanA ? 'A ' : 'B ';
  return (
    <div>
      <h1>Czy A jest większe od B?</h1>
      <label>A:</label>
      <input type="number" name="A" {(event)=>onChange{setValueA(event.target.value)}}onChange={handleChangeA} />
      <label>B:</label>
      <input type="number" name="B" onChange={handleChangeB} />
      {!isEmpty && (
        <p>
          Odpowiedź: {text1} jest większe od {text2}
        </p>
      )}
    </div>
  );
}
