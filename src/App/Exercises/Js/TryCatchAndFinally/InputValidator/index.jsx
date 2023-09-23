import { useState } from 'react';

export function NumberInputValidator() {
  const [getInputValue, setInputValue] = useState('');
  const [getErrorMessage, setErrorMessage] = useState('');

  const validate = (value) => {
    try {
      //konwertuje na liczbe calkowita przy pomocy parseInt
      const intValue = parseInt(value, 10);

      //jezeli liczba nie jest number/integerem
      if (isNaN(intValue)) {
        throw new Error('Wprowadzona watosc nie jest liczba calkowita');
      }
      setErrorMessage('');
    } catch (error) {
      setErrorMessage(error.message);
    }
  };
  const handleInputValidate = (event) => {
    const inputValue = event.target.value;
    setInputValue(inputValue);
    console.log(inputValue);
    setInputValue(inputValue);
    validate(inputValue);
  };

  return (
    <div className="container--number-input-validator">
      <input
        type="text"
        placeholder="wprowadz litere"
        value={getInputValue}
        onChange={handleInputValidate}
      />
      <br />
      <span>Error: {getErrorMessage && getErrorMessage}</span>
    </div>
  );
}
