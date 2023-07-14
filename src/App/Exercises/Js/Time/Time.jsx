import React, { useState, useEffect } from 'react';
import './styles.css';


export function Exercise3() {
  const now = Date.now();
  const now2 = +new Date();

  const [time, setTime] = useState(new Date());

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours();

  const secondsRotation = (seconds / 60) * 360;
  const minutesRotation = ((minutes * 60 + seconds) / 3600) * 360;
  const hoursRotation = ((hours % 12) / 12) * 360 + ((minutes / 60) * 30);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

  
    return () => clearInterval(interval);
  }, []);

    return (
    <div>

        <p>Time 1: {now}</p>
        <p>Time 2: {now2}</p>
        <p>Current time: {time.toLocaleTimeString()}</p>

        <div className="clock">
        <div className="hand seconds" style={{ transform: `rotate(${secondsRotation}deg)` }}></div>
        <div className="hand minutes" style={{ transform: `rotate(${minutesRotation}deg)` }}></div>
        <div className="hand hours" style={{ transform: `rotate(${hoursRotation}deg)` }}></div>
    
    </div>
    </div>
  );
}

export default Exercise3;


