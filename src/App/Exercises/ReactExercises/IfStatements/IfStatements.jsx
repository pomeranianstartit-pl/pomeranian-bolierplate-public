import React, { useState } from 'react';

import './style.css';

export function IfStatements() {
  const [clicks, setCliks] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [text, setText] = useState('currentsCliks jest mniejsze lub = od 5');

  const handleButtononClick = () => {
    const currentClicks = clicks + 1;

    if (currentClicks > 5) {
      setText('currentsCliks jest większe od 5');
      setIsVisible(false);
    }

    // console.log('Kliknięte');
    setCliks(currentClicks); // funkcja, do której dodaje nowa wartosc

    // if (currentClicks > 5) {
    //   setText('currentsCliks jest większe od 5');
    // } else if (currentClicks === 3) {
    //   setText('currentsCliks jest równe 3!!!');
    // } else {
    //   setText('currentsCliks jest mniejsze lub = od 5');
    // }
  };

  return (
    <div>
      <p>{text}</p>
      <p>{clicks}</p>
      {/* conditional rendering */}
      {isVisible && <button onClick={handleButtononClick}>Kliknij mnie</button>}
    </div>
  );
}
