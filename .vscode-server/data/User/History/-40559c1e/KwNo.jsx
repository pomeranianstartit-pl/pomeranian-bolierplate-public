import React, { useState } from 'react';

import './style.css';

export function Exercise1() {
  const [clicks, setClicks] = useState(0);
  const [showText, setShowText] = useState(false);

  const handleClick = () => {
    if (clicks == 5) {
      setShowText(true);
    } else {
      setClicks(clicks + 1);
    }
  };
  return (
    <div>
      <p>Jestem przykładowym routem</p>
    </div>
  );
}
