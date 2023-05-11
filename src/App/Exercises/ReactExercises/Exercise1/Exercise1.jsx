
import React, { useState } from 'react';

import './style.css';
import { click } from '@testing-library/user-event/dist/click';

export function Exercise1() {
  const [clicks, setClicks] = useState(0);
  const [text, setText] = useState('start');

  const handleClick = () => {
    if (clicks < 5) {
      setClicks(clicks + 1);
      setText('ilość kliknięć: ' + clicks);
    } else {
      setText('osiągnięto 5 kliknięć');
    }
  };

  //const isFiveClicks = click === 5;

  return (
    <div>
      <p>{text}</p>

      <button className="button1" onClick={handleClick}>
        Click!
      </button>
    </div>
  );
}

