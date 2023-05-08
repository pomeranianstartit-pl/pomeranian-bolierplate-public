import React, { useState } from 'react';

import './style.css';

export function Exercise1() {
  const [clicks, setClicks] = useState(0);
  const [text, setText] = useState('Start');

  const handleClick = () => {
    if (clicks < 5) {
      setClicks(clicks + 1);
      setText('ilość kliknięć: ' + clicks);
    } else if (clicks === 5) {
      setClicks(clicks + 1);
      setText('osiągnięto 5 kliknięć');
    } else {
      setClicks(0);
    }
  };
  return (
    <div>
      <p>{text}</p>
      <button className="exercise1-button" onClick={handleClick}>
        Start!
      </button>
    </div>
  );
}
