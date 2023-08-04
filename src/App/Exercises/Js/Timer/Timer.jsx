import './styles.css';
import { useEffect, useState } from 'react';

export const Timer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(0);

  function handleStart() {
    setIsRunning(!isRunning);
    incrementTime();
  }
  function handleRestart() {
    setTime(0);
    setIsRunning(false);
    clearInterval(intervalId);
  }

  function incrementTime() {
    const id = setIntervalId(() => {
      setTime((currentTime) => currentTime + 1);
    }, 1000);
    setIntervalId(id)
  }


  useEffect(() => {
    return () => clearInterval(intervalId)
  }, [intervalId])
  return (
    <div>
      <h1>Timer</h1>
      <p>{time} sec</p>
      <button onClick={handleStart}>{isRunning ? 'Stop' : 'Start'}</button>
      <button onClick={handleRestart}>Restart</button>
    </div>
  );
};
