import './styles.css';
import { useState, useEffect } from 'react';

export const SetTimeout = () => {
  const [progress, setProgress] = useState(10);
  const [value, setValue] = useState(0);

  function handleOnClick() {
    console.log('klikniecie');
    setValue(value + 10);
  }

  useEffect(() => {
    console.log('Jestem callback');

    setTimeout(() => {
      console.log('zwiekszam rozmiar progress Bar', value);
      setProgress(value);
    }, 1000);
  }, [value]);

  return (
    <div>
      <h1>useEffect, setTimeout, setInterval</h1>
      <p>
        Value: {value}, Progress: {progress}
      </p>

      <button onClick={handleOnClick}>Increment value</button>
      <div style={{ backgroundColor: 'blue', width: progress }}>.</div>
    </div>
  );
};
