import './styles.css';
import { useState, useEffect } from 'react';

export const SetTimeout = () => {

  const [value, setValue] = useState(0)



  function handleOnClick() {
    console.log('kliknieto');
    setValue(value + 1)

  }



  function effectCallback() {
    console.log('Jestem callback');

  }


  useEffect(effectCallback);

  console.log('pierwsza wiadomośc', value);
  return (
    <div>
      <h1>useEffect, setTimeout, setInterval</h1>
      <p>Value: {value}</p>
      <button onClick={handleOnClick}>Increment Value</button>
    </div>
  );
};
