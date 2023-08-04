import './styles.css';
import { useState, useEffect } from 'react';

export const SetTimeout = () => {

  const [value, setValue] = useState(0)

  console.log('pierwsza wiadomośc', value);

  function handleOnClick() {

    setValue(value + 1)
  }

  return (
    <div>
      <h1>useEffect, setTimeout, setInterval</h1>
      <p>Value: (value)</p>
      <button onClick={handleOnClick}>Increment Value</button>
    </div>
  );
};
