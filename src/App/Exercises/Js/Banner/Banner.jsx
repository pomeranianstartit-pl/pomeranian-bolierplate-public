import React, { useState, useEffect } from 'react';
import './styles.css';

export const Exercise6 = () => {
  const [text, setText] = useState('Sprzedam Opla!');
  const [position, setPosition] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isRunning) {
        setPosition((prevPosition) => prevPosition - 1);
      }
    }, 200);

    return () => clearInterval(intervalId);
  }, [isRunning]);

  useEffect(() => {
    if (position <= -text.length * 15) {
      setPosition(0);
    }
  }, [position, text]);

  const toggleAnimation = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  return (
    <div className="banner-container">
    <div className="banner-text" style={{ transform: `translateX(${position}px)` }}>
      {text}
    </div>
    <div>
      <div>
        <br></br>
        <button className="animation-button" onClick={toggleAnimation}>
          {isRunning ? 'Zatrzymaj' : 'Wznów'}
        </button>
      </div>
    </div>
  </div>

  );
};

export default Exercise6;