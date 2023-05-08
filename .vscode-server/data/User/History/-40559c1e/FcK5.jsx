import React, { useState } from 'react';

import './style.css';

export function Exercise1() {
  const [clicks, setClicks] = useState(0);
  const isFiveClicks = clicks === 5;
  let showImage = false;
  const handleClickAndCheckFive = () => {
    if (!isFiveClicks) {
      setClicks(clicks + 1);
    } else {
      showImage = true;
    }
  };
  return (
    <div>
      <p>Kliknij 5 razy</p>
      <button className="exercise1-button" onClick={handleClickAndCheckFive}>
        Start!
      </button>
      {showImage && <img />}
    </div>
  );
}
