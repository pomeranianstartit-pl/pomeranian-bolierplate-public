import './styles.css';
import React, { useState } from 'react';

export const Exercise3 = () => {
  const [givenNumber, setGivenNumber] = useState(0);
  const [text, setText] = useState('');

  const handleChange = (event) => {
    const newValue = Number(event.target.value); //rzutowanie stringa na number (input zapisuje wszystko jako string)
    setGivenNumber(newValue);

    if (newValue > 100) {
      setText('Podana liczba jest większa niż 100');
    } else if (newValue > 10) {
      setText('Podana liczba jest większa niż 10');
    } else if (newValue === 10) {
      setText('Podana liczba jest równa 10');
    } else {
      setText('Podana liczba jest mniejsza niż 10');
    }
  };

  const ifGreaterThan10 = givenNumber > 10; //flaga

  return (
    <div>
      <h1>Czy wpisana liczba jest większa od 10?</h1>

      <input
        type="number"
        placeholder="wpisz liczbę"
        onChange={handleChange}
        // value={givenNumber} ustawia poczatkowa liczbe
      />

      {ifGreaterThan10 ? (
        <p>Tak, liczba: {givenNumber} jest większa od 10</p>
      ) : (
        <p>Nie, liczba: {givenNumber} jest mniejsza od 10</p>
      )}
      <p>{text}</p>
    </div>
  );
};
