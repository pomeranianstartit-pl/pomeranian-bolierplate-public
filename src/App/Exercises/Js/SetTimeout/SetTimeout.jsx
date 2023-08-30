import { useEffect } from 'react';
import './styles.css';
import { useState } from 'react';
export const SetTimeout = () => {
  const [value, setValue] = useState(0);
  const [progress, setProgress] = useState(10);
  const [otherValue, setOtherValue] = useState(0);
  console.log('pierwsza wiadomosc', value);

  function handleOnclick() {
    console.log('kliknieto');
    setValue(value + 10);
  }
  useEffect(() => {
    console.log('Jestem funckją effectCallBack');
    const id = setTimeout(() => {
      console.log('zwiekszam rozmiar progress bar', value);
      setProgress(value);
    }, 500);
    return () => clearTimeout(id);
  }, [value]);

  function handleToggleIncrement() {
    setInterval(() => {
      console.log('Other value', otherValue);
      setOtherValue(otherValue + 10);
    }, 1000);
  }

  return (
    <div>
      <h1>use Effect , setTimeout , setInterval</h1>
      <p>Value = {value}</p>
      <button onClick={handleOnclick}>Increment Value</button>
      <div style={{ backgroundColor: 'red', width: progress }}>.</div>
      <button onClick={handleToggleIncrement}>Dodawaj</button>
    </div>
  );
};
