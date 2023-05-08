import React, { useState } from 'react';

import './style.css';

export function Exercise1() {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };
  const isFiveClicks = clicks === 5;
  return (
    <div>
      <p>Kliknięto {clicks} razy!</p>
      <button className="exercise1-button" onClick={handleClick}>
        Click!
      </button>
      <button
        onClick={() => {
          setClicks(0);
        }}
      >
        Reset!
      </button>
    </div>
  );
}
