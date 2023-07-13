import React, { useState } from 'react';

import './style.css';

export function IfStatements() {
  const [clicks, setClicks] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [text, setText] = useState('Test text z useState');

  const handleButtonClick = () => {
    const currentClicks = clicks + 1;
    setClicks(currentClicks);

    if (currentClicks > 5) {
      setText('CurrentCliks jest większe od 5');
      setIsVisible(false);
    }

    //if (currentClicks > 5) {
    //     setText('CurrentCliks jest większe od 5');
    //   } else if (currentClicks === 3) {
    //    console.log('currentCliks jest - 3!');
    //   console.log('IcurrentCliks jest wieksze lub rowne 5');
    //}
  };

  return (
    <div>
      <p>{clicks}</p>
      <p>{text}</p>
      {isVisible && <button onClick={handleButtonClick}>Kliknij mnie</button>}
    </div>
  );
}
