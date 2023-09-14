import { useState } from 'react';
import './styles.css';

export const ReactOnClick = () => {
  //const [isClicked, setIsClicked] = useState(false);
  const [count, setCount] = useState(0);

  //const text = isClicked ? 'Kliknięte' : 'Nie kliknięte';

  function handleClick() {
    //  setIsClicked(!isClicked);
    setCount(count + 1);
    //setIsClicked(!isClicked);
  }

  return (
    <div>
      <h1>Cześć!</h1>

      <button onClick={handleClick}>{count}</button>
    </div>
  );
};
