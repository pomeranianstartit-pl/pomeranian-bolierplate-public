import React, { useState } from 'react';

import './style.css';

export function IfStatements() {
  const [clicks, setClicks] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [text, setText] = useState('');
  const handleButtonClick = () => {
    const moreClicks = clicks + 1;
    console.log('Kliknięte');
    setClicks(moreClicks);

    if (moreClicks > 5) {
      setText('moreClicks jest większe od 5');
      setIsVisible(false);
    }
    // co się dzieje jeżeli warunek jest spełniony
    if (moreClicks > 5) setText('moretClicks jest większe od 5');

    // co się dzieje jeżeli warunek nie jest spełniony
  };
  return (
    <div>
      <p>{clicks}</p>
      <p>{text}</p>
      {/* conditional rendering */}
      {isVisible && <button onClick={handleButtonClick}>Kliknij mnie</button>}
    </div>
  );
}
