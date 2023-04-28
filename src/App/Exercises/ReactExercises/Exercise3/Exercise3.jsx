import './styles.css';
import React, { useState } from 'react';

export const Exercise3 = () => {
  const [givenNumber, setGivenNumber] = useState(0);
  const [text, setText] = useState('');

  const handleChange = (event) => {
    const newValue = Number(event.target.value); //rzutowanie stringa na number (input zapisuje wszystko jako string)
    setGivenNumber(newValue);

    if (newValue > 100) {
      setText('podana liczba jest wieksza niz 100');
    } else if (newValue > 10) {
      setText('podana liczba jest wieksza niz 10');
    } else if (newValue === 10) {
      setText('podana liczba jest rowna 10');
    } else {
      setText('podana liczba jest mniejsza niz 10');
    }
  };

  const ifGreaterThan10 = givenNumber > 10; //flaga

  return (
    <div>
      <h1>Czy A jest większe od 10?</h1>

      <input type="number" onChange={handleChange} value={givenNumber} />

      {ifGreaterThan10 ? (
        <p>Tak liczba {givenNumber} jest wieksza od 10</p>
      ) : (
        <p>Nie, liczba {givenNumber} jest mniejsza od 10</p>
      )}
      <p>{text}</p>
    </div>
  );
};
