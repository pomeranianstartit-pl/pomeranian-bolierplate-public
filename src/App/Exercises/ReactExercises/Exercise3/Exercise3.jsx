import React, { useState } from 'react';

import './style.css';

export function Exercise3() {
  const [givenNumber, setGivenNumber] = useState();
  const [text, setText] = useState();

  const handleChange = (event) => {
    setGivenNumber(event.target.value);
  };

  const isGreaterThan10 = givenNumber > 10;

  return (
    <div className="exercise-3">
      <h3>Czy A jest większe od 10?</h3>
      <input type="number" onChange={handleChange} value={givenNumber} />

      {isGreaterThan10 ? (
        <p>Tak, liczba {givenNumber} jest większa od 10</p>
      ) : (
        <p>Nie, liczba {givenNumber} nie jest większa od 10</p>
      )}
      <p>{text}</p>
    </div>
  );
}
