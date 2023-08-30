import { useEffect } from 'react';
import './styles.css';
import { useState } from 'react';
export const SetTimeout = () => {
  const [value, setValue] = useState(0);

  function handleOnclick() {
    console.log('kliknieto');
    setValue(value + 1);
  }

  function effectCallback() {
    console.log('Jestem funckją effectCallBack');
  }

  useEffect(effectCallback, []);
  console.log('pierwsza wiadomosc', value);

  return (
    <div>
      <h1>use Effect , setTimeout , setInterval</h1>
      <p>Value = {value}</p>
      <button onClick={handleOnclick}>Increment Value</button>
    </div>
  );
};
