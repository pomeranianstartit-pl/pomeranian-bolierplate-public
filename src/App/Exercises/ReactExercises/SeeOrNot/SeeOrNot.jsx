import { useState } from 'react';
import './styles.css';
import { click } from '@testing-library/user-event/dist/click';

export const SeeOrNot = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [myButton, setMyButton] = useState('ukryj');

  function clickHandler() {
    let currentIsVisible = isVisible;

    setIsVisible(!currentIsVisible);

    console.log(currentIsVisible);

    if (currentIsVisible) {
      setMyButton('Pokaz');
    } else {
      setMyButton('Ukryj');
    }
  }

  return (
    <div>
      <h1>See or not</h1>
      <button className="button" onClick={clickHandler}>
        {myButton}
      </button>
      {isVisible && <h2>{'Teraz mnie widać'}</h2>}
    </div>
  );
};
