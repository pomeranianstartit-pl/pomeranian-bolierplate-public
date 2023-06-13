import { useState } from 'react';
import './styles.css';
 
export const SeeOrNot = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [myButton, setMyButton] = useState('ukryj');
  function clickHandler() {
    let currentIsVisible = isVisible;
    setIsVisible(!currentIsVisible);
    if (currentIsVisible) {
      setMyButton('Pokaż');
    } else {
      setMyButton('Ukryj');
    }
  }
 
  return (
    <div className="HideMe">
      <h1>See or Not</h1>
 
      <button onClick={clickHandler}>{myButton}</button>
      {isVisible && <p>{'Teraz mnie widać'}</p>}
    </div>
  );
};