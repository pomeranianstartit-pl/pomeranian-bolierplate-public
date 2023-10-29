import { useState } from 'react';

export const JsSetInterval = () => {
  const [count, setCount] = useState(0);
  const [intervalId, setIntervalId] = useState([]);
  const [running, setRunning] = useState(false);

  const handleStart = () => {
    if (running) {
      return;
    }
    setRunning(true);
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
    setIntervalId([...intervalId, interval]);
  };

  const handleStop = () => {
    intervalId.forEach((interval) => clearInterval(interval));
    setIntervalId([]);
    setRunning(false);
  };

  return (
    <div>
      <div>{count}</div>
      <button onClick={handleStart}>Dodaj</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
};
