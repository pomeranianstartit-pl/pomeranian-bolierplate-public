import React, { useState } from 'react';

import './styles.css';

export function Exercise2() {
  const [clicks, setClicks] = useState(0);
  const handleClick = () => {
    setClicks(clicks + 1);
  };
  return (
    <div>
      <p>Kliknięto {clicks} razy!</p>
      <button onClick={handleClick}>Click</button>

      <button
        className="buttonex1"
        onClick={() => {
          setClicks(0);
        }}
      >
        Reset
      </button>
    </div>
  );
}
