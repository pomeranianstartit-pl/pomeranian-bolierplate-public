import { useEffect, useState } from 'react';
import './styles.css';

export const SetTimeout = () => {
  const [value, setValue] = useState(0);
  const [progress, setProgress] = useState(10);
  const [otherValue, setOtherValue] = useState(0);
  const [intervalId, setSetIntervalId] = useState();

  function handleOnClick() {
    console.log('Kliknieto');
    setValue(value + 1);
  }

  useEffect(() => {
    console.log('Jestem funkcją effect');
    const id = setTimeout(() => {
      console.log('Zwiększam rozmiar Progress Bar', value);
      setProgress(value);
    }, 1000);

    return () => clearTimeout(id);
  }, [value]);

  function handleToggleIncrement() {
    const id = setInterval(() => {
      console.log('Other value:', otherValue);
      setOtherValue((currentOtherValue) => currentOtherValue + 10);
    }, 1000);
    setSetIntervalId(id);
  }

  useEffect(() => {
    return () => clearInterval(intervalId);
  }, [intervalId]);

  console.log('Pierwsza wiadomość', value, progress);
  return (
    <div>
      <h1>USeEfect, setTimeout, setInterval</h1>
      <p>Value = {value}</p>
      <button onClick={handleOnClick}>Increment Value</button>
      <div style={{ backgroundColor: 'red', width: progress * 10 }}>.</div>
      <button onClick={handleToggleIncrement}>Dodawaj</button>
      <p>Other value = {otherValue}</p>
    </div>
  );
};
