import './styles.css';
import React, { useState } from 'react';

export const Exercise2 = () => {
  const [isVisible, setIsVisible] = useState(false);

  // const isVisible = true;
  const buttonLabel = isVisible ? 'HIDE' : 'SHOW';

  const handleClick = () => {
    setIsVisible(!isVisible);
    {
      /*wykrzyknik zmienia value na przeciwny */
    }
  };

  return (
    <div>
      <h1>See or not</h1>
      <button onClick={handleClick}>{buttonLabel}</button>
      {isVisible && <h3>Teraz mnie widać</h3>} {/*dziala jak if */}
      {/* {isVisible ? <p>tajny tekst</p> : <p>tajny tekst jest ukryty</p>} */}
    </div>
  );
};
