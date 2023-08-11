import React, { useState } from 'react';
export function Exercise() {
  //dodaj input
  //dodaj metode validate z jednym parametrem
  //w metodzie validate sprawdz czy podany parametr jest integerem, jesli nie wyrzucic error
  //dodac w metodzie onChange inputa , wywoływane metody validate z wartością inputa
  //zobaczyć jaki będzie wynik wpidania czegoś co nie jest liczbą
  //
  //dodać div pod inputem
  //przechwyćic wątek za pomocą 'try catch' i informacje o blednym inpucie

  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  const validate = (value) => {
    if (isNaN(parseInt(value))) {
      throw new Error('Input correct value');
    }
  };

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    try {
      validate(inputValue);
      setInputValue(inputValue);
      setError('');
    } catch (error) {
      setInputValue(inputValue);
      setError(error.message);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="input number"
        value={inputValue}
        onChange={handleInputChange}
      />
      <div style={{ color: 'red' }}>{error}</div>
    </div>
  );
}
