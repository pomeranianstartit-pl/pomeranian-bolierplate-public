import React, { useState } from 'react';

import './style.css';

export function IfStatementsMoreOrLess() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [text, setText] = useState('XX jest większe');


  //Jak zmodyfikować funkcje, żeby obsługiwała każdy input?
  const handleOnChange1 = (event) => {
    let inputValue = event.target.value;
    setNumber1(inputValue++);
  };
  const handleOnChange2 = (event) => {
    let inputValue = event.target.value;
    setNumber2(inputValue++);
  };

  if (handleOnChange1 > handleOnChange2) {
    console.log('Pierwsza liczba jest większa!');
  }

  return (
    <div className='cwiczenie'>
      <h1>Czy A jest większe od B?</h1>
      <input type="number" value={number1} onChange={handleOnChange1} />
      <input type="number" value={number2} onChange={handleOnChange2} />
      <p>
        Odpowiedź:
        {number1 > number2 && "Wartość A jest większa niż B"}
        {number1 < number2 && "Wartość A jest większa niż B"}
        {number1 === number2 && "Wartość A jest równa B"}
      </p>
    </div>
  );
}
