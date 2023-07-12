import React, { useState } from 'react';

import './style.css';

export function IfStatements() {
  const [clicks, setClicks] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [text, setText] = useState('CurrentClicks jest mniejsze lub równe 5');

  const handleButtonClick = () => {
    const currentClicks = clicks + 1;
    setClicks(currentClicks);

    if (currentClicks > 5) {
      setText('CurrentClicks jest większe od 5');
      setIsVisible(false);
    }

    // if (currentClicks > 5) {
    //   // console.log('currentClicks jest większe od 5');
    //   setText('CurrentClicks jest większe od 5');
    // } else if (currentClicks === 3) {
    //   // console.log('currentClicks jest równe 3!!!');
    //   setText('CurrentClicks jest równe 3!!!');
    // } else {
    //   // console.log('currentClicks jest mniejsze lub równe 5');
    //   setText('CurrentClicks jest mniejsze lub równe 5');
    // }
  };

  return (
    <div>
      <p>{clicks}</p>
      <p>{text}</p>
      {/*conditional rendering */}
      {isVisible && <button onClick={handleButtonClick}>Kliknij mnie</button>}
    </div>
  );
}
