import { useState } from 'react';
import './styles.css';

export const ReactOnClick = () => {
  const [isClicked, setIsClicked] = useState(false);
  const text = isClicked ? 'Kliknięte' : 'Nie kliknięte';

  function handleClick() {
    setIsClicked(!isClicked);
  }

  return (
    <div>
      <h1>Cześć!</h1>

      <button onClick={handleClick}>{text}</button>
    </div>
  );
};
