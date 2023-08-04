import './styles.css';
import { useState, useEffect } from 'react';

export const SetTimeout = () => {
  const [progress, setProgress] = useState(10);
  const [value, setValue] = useState(0);
  const [otherValue, setOtherValue] = useState(0);
  const [intervalId, setIntervalId] = useState();

  function handleOnClick() {
    console.log('klikniecie');
    setValue(value + 10);
  }

  useEffect(() => {
    console.log('Jestem callback');

    const id = setTimeout(() => {
      console.log('zwiekszam rozmiar progress Bar', value);
      setProgress(value);
    }, 1000);

    return () => {
      clearTimeout(id);
    };
  }, [value]);

  function handleToggleIncrement() {

    const id = setInterval(() => {

      console.log('Other Value: ', otherValue);
      setOtherValue((currentOtherValue) => currentOtherValue + 10)
    }, 1000);
    setIntervalId(id)
  }
  useEffect(() => {
    return () => { clearInterval(intervalId) }
  }, [intervalId])
  return (
    <div>
      <h1>useEffect, setTimeout, setInterval</h1>
      <p>
        Value: {value}, Progress: {progress}
      </p>

      <button onClick={handleOnClick}>Increment value</button>
      <div style={{ backgroundColor: 'blue', width: progress }}>.</div>
      <button onClick={handleToggleIncrement}>Dodawaj</button>
      <p>Other Value ={otherValue}</p>
    </div>
  );
};
