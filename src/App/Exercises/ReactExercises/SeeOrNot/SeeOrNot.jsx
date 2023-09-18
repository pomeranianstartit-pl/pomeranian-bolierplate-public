import { useState } from 'react';
import './styles.css';

export const SeeOrNot = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [myButton, setMyButton] = useState('ukryj');
  function clickHandler() {
    let currentIsVisible = isVisible;
    setIsVisible(!isVisible);
    console.log(currentIsVisible);
    if (currentIsVisible) {
      setMyButton('Pokaż');
    } else {
      setMyButton('Ukryj');
    }
  }

  return (
    <div>
      <h1>See or not</h1>
      <button className="btn" onClick={clickHandler}>
        {myButton}
      </button>
      {isVisible && <h2>{'Teraz mnie widać'}</h2>}
    </div>
  );
};
