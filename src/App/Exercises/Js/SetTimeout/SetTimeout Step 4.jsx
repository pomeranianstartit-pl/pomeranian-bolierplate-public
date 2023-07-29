import { useEffect, useState } from 'react';
import './styles.css';

export const SetTimeout = () => {
  const [value, setValue] = useState(0);
  const [progress, setProgress] = useState(10);

  function handleOnClick() {
    console.log('Kliknieto');
    setValue(value + 1);
  }

  useEffect(() => {
    console.log('Jestem funkcją effect');
    setTimeout(() => {
      console.log('Zwiększam rozmiar Progress Bar', value);
      setProgress(value);
    }, 5000);
  }, [value]);
  console.log('Pierwsza wiadomość', value, progress);
  return (
    <div>
      <h1>USeEfect, setTimeout, setInterval</h1>
      <p>Value = {value}</p>
      <button onClick={handleOnClick}>Increment Value</button>
      <div style={{ backgroundColor: 'red', width: progress * 10 }}>.</div>
    </div>
  );
};
