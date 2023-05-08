import React, { useState } from 'react';

import './style.css';

export function Exercise1() {
  const [clicks, setClicks] = useState(0);
  const [text, setText] = useState('start');
  const isFiveClicks = clicks === 5;
  let showImage = false;
  const handleClick = () => {
    if (clicks < 5) {
      setClicks(clicks + 1);
      U;
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
    </div>
  );
}
