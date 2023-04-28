import './styles.css';
import React, { useState } from 'react';

export const Exercise1 = () => {
  const [clicks, setClicks] = useState(1);
  const [showText, setShowText] = useState('start');

  // const handleClick = () => {
  //   setClicks(clicks + 1);
  // };

  //const isFiveClicks = clicks === 5;

  const handleClick = () => {
    if (clicks < 5) {
      setClicks(clicks + 1);
      setShowText('ilosc klikniec:' + clicks);
    } else {
      setShowText('osiagnieto 5 klikniec');
    }
  };

  return (
    <div>
      <h1>Kliknij 5</h1>

      <button onClick={handleClick}>START</button>
      <div>{showText}</div>

      <button
        onClick={() => {
          setClicks(0);
        }}
      >
        Reset
      </button>

      {/* {isFiveClicks && <h1>kliknieto 5 razy!</h1>} */}
      {/* {showText && <h1>kliknieto 5 razy!</h1>} */}
    </div>
  );
};
