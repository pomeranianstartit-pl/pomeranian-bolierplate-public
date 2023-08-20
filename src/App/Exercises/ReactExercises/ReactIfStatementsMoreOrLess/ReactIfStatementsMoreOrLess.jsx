import { useState } from 'react';

export function ReactIfStatementsMoreOrLess() {
  const [inputValue, setInputValue] = useState(0);
  const handleChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };

  const visible = inputValue > 5;

  return (
    <div>
      <input type="number" onChange={handleChange} value={inputValue} />
      {/* 1. sposób na if wewntąrz JSX */}
      {inputValue < 10 ? 'Warunek spełniony' : 'Warunek nie spełniony'}

      {/* 2. sposób - conditional rendering */}
      {inputValue < 10 && 'Warunek spełniony'}
      {inputValue >= 10 && 'Warunek nie spełniony'}

      {/* Przykładowy conditional rendering dla widoczności elementu */}
      {visible && 'Wyrenderuj mnie jeżeli visible jest true'}
    </div>
  );
}
