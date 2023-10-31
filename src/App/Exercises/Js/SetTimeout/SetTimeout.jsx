import { useEffect, useState } from 'react';
import './styles.css';

export const SetTimeout = () => {
  const [value, setValue] = useState(0);
  const [counter, setCounter] = useState(0);
  const [timeoutId, setTimeoutId] = useState();
  const [intervalId, setIntervalId] = useState();
  const [message, setMessage] = useState('');
  const handleonClick = () => {
    clearTimeout(timeoutId);
    const id = setTimeout(() => setValue((prevValue) => prevValue + 1), 2000);
    setTimeoutId(id);
  };

  useEffect(() => {
    console.log('wykonano useEffect', value);
  }, [value]);

  useEffect(() => {
    /// ...
    return () => {
      clearTimeout(timeoutId);
    };
  }, [timeoutId]);

  useEffect(() => {
    /// ...
    return () => {
      clearInterval(intervalId);
    };
  }, [intervalId]);

  useEffect(() => {
    const id = setTimeout(() => setMessage('Hello !!!'), 3000);
    return () => clearTimeout(id);
  }, []);

  const handleCounter = () => {
    // if (intervalId) return;
    clearInterval(intervalId);
    const id = setInterval(() => {
      console.log('ustawiam counter na + 1');
      setCounter((prevValue) => prevValue + 1);
    }, 1000);
    setIntervalId(id);
  };

  const handleStopCounter = () => {
    clearInterval(intervalId);
    // setIntervalId(undefined);
  };

  return (
    <div>
      <h1>useEffect, setTimeout, setInterval</h1>
      <div>Value = {value}</div>
      <div>Couner = {counter}</div>
      <br />
      <button style={{ padding: '1rem' }} type="button" onClick={handleonClick}>
        +
      </button>
      <button onClick={handleCounter}>Counter</button>
      <button onClick={handleStopCounter}>Stop Counter</button>
      <div>{message}</div>
    </div>
  );
};
