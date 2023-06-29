import '../WelcomeView/WelcomeView.css';
import React, { useState } from 'react';

export const Exercise2 = () => {
  const [isVisible, setIsVisible] = useState(false);

  // warunek zmiany nazwy przycisku
  const buttonLabel = isVisible ? 'HIDE MESSAGE' : 'SHOW MESSAGE';

  const handleClick = () => {
    setIsVisible(!isVisible); //wykrzyknik zmienia value na przeciwny
  };

  return (
    <div className="welcomeview">
      <div className="welcomeview-inline-block">
        <div className="welcomeview-text">
          <h1>See or not</h1>
        </div>
        <div className="welcomeview-button">
          <button type="button" onClick={handleClick}>
            <p>{buttonLabel}</p>
          </button>
        </div>
        <div id="text-to-left" className="welcomeview-placeholder-box">
          {isVisible && <h3>Hello there!</h3>} {/*&& dziala jak if */}
        </div>
      </div>
    </div>
  );
};
