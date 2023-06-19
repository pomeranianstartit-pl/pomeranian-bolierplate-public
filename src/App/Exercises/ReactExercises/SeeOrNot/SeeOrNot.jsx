import { useState } from 'react';
import './styles.css';

export const SeeOrNot = () => {
  const [isVisible, setIsVisible] = useState(true);

  function clickHandler() {
    let currentIsVisible = isVisible;

    setIsVisible(!currentIsVisible);

    console.log(currentIsVisible);
  }

  return (
    <div>
      <h1>See or not</h1>
      <button className="btn" onClick={clickHandler}>
        {'Ukryj'}
      </button>
      {isVisible && <h2>{'Teraz mnie widać'}</h2>}
    </div>
  );
};