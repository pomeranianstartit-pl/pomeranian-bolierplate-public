import React, { useState } from 'react';

import './style.css';

export function Exercise1() {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };
  const isFiveClicks = clicks === 5;
  const handleClickAndCheckFive = () => {
    if (!isFiveClicks) {
      setClicks(clicks + 1);
    }
  };
  return (
    <div>
      <p>Kliknij 5 razy</p>
      <button className="exercise1-button" onClick={handleClick}>
        Start!
      </button>
      {showImage && <img />}
    </div>
  );
}
