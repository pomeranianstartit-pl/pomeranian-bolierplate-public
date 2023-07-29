import { useState } from 'react';
import './styles.css';

export const SetTimeout = () => {
  const [value, setValue] = useState(0);
  console.log('Pierwsza wiadomość ' + value);

  function handleOnClick() {
    setValue(value + 1);
  }

  return (
    <div>
      <h1>USeEfect, setTimeout, setInterval</h1>
      <p>Value = {value}</p>
      <button onClick={handleOnClick}>Increment Value</button>
    </div>
  );
};
