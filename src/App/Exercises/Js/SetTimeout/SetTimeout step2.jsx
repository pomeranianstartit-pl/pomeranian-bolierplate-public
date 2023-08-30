import { useEffect } from 'react';
import './styles.css';
import { useState } from 'react';
export const SetTimeout = () => {
  const [value, setValue] = useState(0);
  const [progress, setProgress] = useState(10);
  console.log('pierwsza wiadomosc', value);

  function handleOnclick() {
    console.log('kliknieto');
    setValue(value + 1);
  }
  useEffect(() => {
    console.log('Jestem funckją effectCallBack');
    setProgress(value);
  }, [value]);

  return (
    <div>
      <h1>use Effect , setTimeout , setInterval</h1>
      <p>Value = {value}</p>
      <button onClick={handleOnclick}>Increment Value</button>
      <div style={{ backgroundcolor: 'red', width: progress }}>.</div>
    </div>
  );
};
