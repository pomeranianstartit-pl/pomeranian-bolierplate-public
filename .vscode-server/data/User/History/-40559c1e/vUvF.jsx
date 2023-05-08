import React, { useState } from 'react';

import './style.css';

export function Exercise1() {
  const [clicks, setClicks] = useState(0);
  const [showText, setShowText] = useState(false);

  const handleClick = () => {
    setClicks(clicks + 1);
    if (clicks == 5) {
      setShowText(true);
    }
  };
  return (
    <div>
      <p>Jestem przykładowym routem</p>
    </div>
  );
}
