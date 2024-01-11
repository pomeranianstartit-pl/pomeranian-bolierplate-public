import { useState } from 'react';

export const Exercise = () => {
  const [count, setCount] = useState(0);

  const [intervalId, setIntervalId] = useState([]);

  const handleStart = () => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    setIntervalId([...intervalId, interval]);
  };

  const handleStop = () => {
    intervalId.forEach((interval) => clearInterval(interval));

    setIntervalId([]);
  };
  const resetButton = () => {
    setCount(0);
  };

  return (
    <div>
      <div>{count}</div>

      <button onClick={handleStart}>Dodaj</button>

      <button onClick={handleStop}>Stop</button>
      <button onClick={resetButton}>Reset</button>
    </div>
  );
};
