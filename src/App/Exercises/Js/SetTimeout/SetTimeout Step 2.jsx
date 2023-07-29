import { useEffect, useState } from 'react';
import './styles.css';

export const SetTimeout = () => {
  const [value, setValue] = useState(0);

  function handleOnClick() {
    setValue(value + 1);
  }

  function efectCallback() {
    console.log('Jestem funkcją effect');
  }
  useEffect(efectCallback, []);
  console.log('Pierwsza wiadomość ' + value);
  return (
    <div>
      <h1>USeEfect, setTimeout, setInterval</h1>
      <p>Value = {value}</p>
      <button onClick={handleOnClick}>Increment Value</button>
    </div>
  );
};
