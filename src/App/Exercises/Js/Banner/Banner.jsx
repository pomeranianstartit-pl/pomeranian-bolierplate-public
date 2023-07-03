import React, { useState, useEffect } from 'react';
import './styles.css';

export const Exercise6 = () => {
  const [leftText, setLeftText] = useState('Sprzedam Opla!');
  const [rightText, setRightText] = useState('Kupię Toyotę!');
  const [leftPosition, setLeftPosition] = useState(0);
  const [rightPosition, setRightPosition] = useState(0);

  useEffect(() => {
    const leftIntervalId = setInterval(() => {
      setLeftPosition((prevPosition) => prevPosition - 1);
    }, 200);

    const rightIntervalId = setInterval(() => {
      setRightPosition((prevPosition) => prevPosition + 1);
    }, 200);

    return () => {
      clearInterval(leftIntervalId);
      clearInterval(rightIntervalId);
    };
  }, []);

  useEffect(() => {
    if (leftPosition <= -leftText.length * 15) {
      setLeftPosition(0);
    }
  }, [leftPosition, leftText]);

  useEffect(() => {
    if (rightPosition >= rightText.length * 15) {
      setRightPosition(0);
    }
  }, [rightPosition, rightText]);

  return (
    <div>
      <div className="banner-container">
        <div className="banner-text" style={{ transform: `translateX(${leftPosition}px)` }}>
          {leftText}
        </div>
      </div>

      <div className="spacer"></div>

      <div className="banner-container">
        <div className="banner-text" style={{ transform: `translateX(${rightPosition}px)` }}>
          {rightText}
        </div>
      </div>
    </div>
  );
};

export default Exercise6;









