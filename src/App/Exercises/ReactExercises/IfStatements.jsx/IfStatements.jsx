import React, { useState } from 'react';

import './style.css';

export function IfStatements() {
  const [clicks, setClicks] = useState(0);
  const [text, setText] = useState('Test text z useState');

  const handleButtonClick = () => {
    const currentClicks = clicks + 1;
    setClicks(currentClicks);

    if (currentClicks > 5) {
      console.log('currentClicks jest większe od 5');
    } else {
      console.log('currentClicks jest mniejsze lub równe 5');
    }
  };

  return (
    <div>
      <p>{clicks}</p>
      <p>{text}</p>
      <button onClick={handleButtonClick}>Kliknij mnie</button>
    </div>
  );
}
