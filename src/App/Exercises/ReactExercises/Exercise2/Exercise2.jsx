import './styles.css';
import React, { useState } from 'react';

export const Exercise2 = () => {
  const [isVisible, setIsVisible] = useState(false);

  // warunek zmiany nazwy przycisku
  const buttonLabel = isVisible ? 'HIDE MESSAGE' : 'SHOW MESSAGE';

  const handleClick = () => {
    setIsVisible(!isVisible); //wykrzyknik zmienia value na przeciwny
  };

  return (
    <div>
      <h1>See or not</h1>
      <button onClick={handleClick}>{buttonLabel}</button>
      {isVisible && <h3>Hello there!</h3>} {/*&& dziala jak if */}
    </div>
  );
};
