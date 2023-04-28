import React, { useState } from 'react';

import './style.css';

export function Exercise4() {
  const [givenNumber, setGivenNumber] = useState();

  const handleChange = (event) => {
    setGivenNumber(event.target.value);
  };

  const isGreaterThan10 = givenNumber > 10;
  return (
    <div className="Exercise4">
      <h3> Czy podana liczba jest większa od 10?</h3>
      <input type="number" onChange={handleChange} value={givenNumber} />

      {isGreaterThan10 ? (
        <p>Tak, liczba {givenNumber} jest większa od 10</p>
      ) : (
        <p>Nie, liczba {givenNumber} nie jest większa od 10</p>
      )}
    </div>
  );
}
