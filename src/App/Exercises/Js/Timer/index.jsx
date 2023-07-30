import { useState, useEffect } from 'react';
import './styles.css';

export const Timer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunnig] = useState(false);
  const [intervalId, setSetIntervalId] = useState();

  function startTimer() {
    setIsRunnig(!isRunning);
    // console.log(isRunning);

    if (isRunning) {
      clearInterval(intervalId);
    } else {
      incrementTime();
    }
  }

  function restartTimer() {
    // console.log('restart');
    setTime(0);
    setIsRunnig(false);
    clearInterval(intervalId);
  }

  function incrementTime() {
    const id = setInterval(() => {
      setTime((currentTime) => currentTime + 1);
    }, 1000);
    setSetIntervalId(id);
  }

  useEffect(() => {
    return () => clearInterval(intervalId);
  }, [intervalId]);

  return (
    <div>
      <h1>Timer</h1>
      <p>{time} sec</p>
      <button onClick={startTimer}>{isRunning ? 'STOP' : 'START'}</button>
      <button onClick={restartTimer}>RESTART</button>
    </div>
  );
};
