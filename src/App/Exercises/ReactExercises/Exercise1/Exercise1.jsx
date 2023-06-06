import '../WelcomeView/WelcomeView.css';
import React, { useState } from 'react';

export const Exercise1 = () => {
  const [clicks, setClicks] = useState(1);
  const [showText, setShowText] = useState('Ilość kliknięć: 0');

  // const handleClick = () => {
  //   setClicks(clicks + 1);
  // };
  //const isFiveClicks = clicks === 5;

  const handleClick = () => {
    if (clicks < 5) {
      setClicks(clicks + 1);
      setShowText('Ilość kliknięć: ' + clicks);
    } else {
      setShowText('BRAWO! Osiągnięto 5 kliknięć!');
    }
  };

  return (
    <div className="welcomeview">
      <div className="welcomeview-inline-block">
        <div className="welcomeview-text">
          <h1>Kliknij przycisk 5 razy</h1>
        </div>

        <div className="welcomeview-button">
          <button type="button" onClick={handleClick}>
            <p>START</p>
          </button>

          <button
            type="button"
            onClick={() => {
              setClicks(1);
              setShowText('Ilość kliknięć: 0');
            }}
          >
            <p>RESET</p>
          </button>
        </div>
      </div>
      <div className="welcomeview-inline-block">
        <div className="welcomeview-placeholder-box">
          <p>{showText}</p>
        </div>
      </div>
    </div>

    //inny zapis wywolania html przez warunek if
    //{isFiveClicks && <h1>kliknieto 5 razy!</h1>}
    //{showText && <h1>kliknieto 5 razy!</h1>}
  );
};
