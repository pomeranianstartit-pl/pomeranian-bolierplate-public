import React, { useState } from 'react';

import './style.css';

export function Exercise2() {
  const [isVisible, setVisibility] = useState(false);

  const text = isVisible ? 'Ukryj' : 'Pokaż';
  const handleClick = () => {
    if (isVisible) {
      setVisibility(false);
    } else {
      setVisibility(true);
    }
  };
  return (
    <div>
      <button onClick={handleClick}>{text}</button>
      {isVisible && <p>Widać mnie!</p>}
    </div>
  );
}
