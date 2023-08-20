import React, { useState } from 'react';

export function ReactIfStatements() {
  const [clicks, setClicks] = useState(0);
  const [text, setText] = useState('start');

  const handleClick = () => {
    if (clicks < 5) {
      const newClicks = clicks + 1;
      const newText = `Teraz jest ${newClicks} kliknięć`;
      setClicks(newClicks);
      setText(newText);
    } else {
      setText('koniec zabawy');
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Kliknij mnie</button>
      <div>{text}</div>
    </div>
  );
}
