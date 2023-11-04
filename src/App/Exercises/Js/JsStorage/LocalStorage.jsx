import { useState } from 'react';

export const LocalStorage = () => {
  const INITIAL_COUNT = 0;
  const COUNT_KEY = 'COUNT_KEY';
  const countFromLocalStorage = localStorage.getItem(COUNT_KEY);
  const notNullFromLocalStorage =
    countFromLocalStorage === null ? '0' : countFromLocalStorage;
  const STORED_COUNT = parseInt(notNullFromLocalStorage, 10);

  const [count, setCount] = useState(STORED_COUNT);

  const handleIncrement = () => {
    const newCount = count + 1;
    localStorage.setItem(COUNT_KEY, JSON.stringify(newCount));
    setCount(newCount);
  };
  const handleReset = () => {
    localStorage.setItem(COUNT_KEY, INITIAL_COUNT);
    setCount(INITIAL_COUNT);
  };
  return (
    <div>
      <h3>LocalStorage</h3>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleReset}>Reset</button>
      <p>Count: {count}</p>
    </div>
  );
};
