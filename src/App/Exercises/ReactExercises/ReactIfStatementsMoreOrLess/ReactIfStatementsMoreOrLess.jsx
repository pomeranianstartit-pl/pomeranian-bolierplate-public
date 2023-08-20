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
      {/* 1 sposob na if wewnatrz JSX */}
      {inputValue < 10 ? 'warunek spełniony' : 'Warunek nie spełniony'}
      {/* 2. sposób - conditional rendering */}
      {inputValue < 10 && 'Warunek spełniony'}
      {inputValue >= 10 && 'Warunek nie spełniony'}
      {/* przykładowy conditiona rendering dla widoczności elementu */}
      {visible && 'wyrenderuj mnie jezeli visible jest true'}
    </div>
  );
}
