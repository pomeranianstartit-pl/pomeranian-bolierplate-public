import React from 'react';

import './style.css';

export function Exercise4() {
  const [givenNumberA, setGivenNumberA] = useState();
  const [givenNumberB, setGivenNumberB] = useState();
  const [text, setText] = useState();

  const handleChange = (event) => {
    setGivenNumber(event.target.value);
  };

  const isGreater = givenNumberA > givenNumberB;

  return (
    <div className="exercise-3">
      <h2>Czy A jest większe od B?</h2>

      <input type="number" onChange={handleChange} value={givenNumberA} />
      <input type="number" onChange={handleChange} value={givenNumberB} />

      {isGreater ? (
        <p>Tak, liczba {givenNumber} jest większa od 10</p>
      ) : (
        <p>Nie, liczba {givenNumber} nie jest większa od 10</p>
      )}

      <p>{text}</p>
    </div>
  );
}
