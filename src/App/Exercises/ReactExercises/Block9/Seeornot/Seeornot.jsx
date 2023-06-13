import './styles.css';
import { useState } from 'react';

export const SeeOrNot = () => {
  const [IsVisible, setIsVisible] = useState(true);

  const [myButton, setMyButton] = useState('ukryj');
  function clickHandler() {
    let currentIsVisible = IsVisible;

    setIsVisible(!currentIsVisible);
    if (currentIsVisible) {
      setMyButton('Pokaż');
    } else {
      setMyButton('Ukryj');
    }
  }

  return <div className="HideMe">
    <h2>See or not?</h2>
    <button className="btn" onClick={clickHandler}>
      {myButton}
      </button>
      {IsVisible && <p>{'Teraz mnie widać'}</p>}
  </div>
}