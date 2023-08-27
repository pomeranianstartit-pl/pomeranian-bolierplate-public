import { useState } from 'react';

export const LocalStorage = () => {
  const COUNT_LOCAL_STORAGE = parseInt(localStorage.getItem('count'));
  const [count, setCount] = useState(COUNT_LOCAL_STORAGE || 0);

  const handleIncrement = () => {
    const newCount = count + 1;
    setCount(newCount);
    localStorage.removeItem('count', newCount);
  };

  const handleReset = () => {
    setCount(0);
    localStorage.removeItem('count');
  };

  return (
    <div>
      <p>Count: {count} </p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleReset}>Reset</button>
      Local Storage
    </div>
  );
};
