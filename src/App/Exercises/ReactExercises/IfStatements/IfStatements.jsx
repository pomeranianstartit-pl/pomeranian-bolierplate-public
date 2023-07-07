import React, { useState } from 'react';

import './style.css';

export function IfStatements() {
  const [clicks, setClicks] = useState(0);
  const [text, setText] = useState('Test');
  const handleButtonClick = () => {
    const moreClicks = clicks + 1;
    console.log('Kliknięte');
    setClicks(moreClicks);

    if (moreClicks > 5) {
      console.log('moreClicks jest większe od 5');
    }
    // co się dzieje jeżeli warunek jest spełniony
    else {
      console.log('moreClicks jest mniejsze lub równe 5');
    }

    // co się dzieje jeżeli warunek nie jest spełniony
  };
  return (
    <div>
      <p>{clicks}</p>
      <p>{text}</p>
      <button onClick={handleButtonClick}>Kliknij mnie</button>
    </div>
  );
}
