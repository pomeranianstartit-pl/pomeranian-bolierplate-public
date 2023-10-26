import React, { useState, useEffect } from 'react';

export const VanishString = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleButtonClick = () => {
    setIsVisible(true);

    setTimeout(() => {
      setIsVisible(false);
    }, 3000);
  };

  const VanishStringtimer = () => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
      let timerInterval;

      if (isRunning) {
        timerInterval = setInterval(() => {
          setTime((prevTime) => prevTime + 1);
        }, 1000);
      } else {
        clearInterval(timerInterval);
      }

      return () => {
        clearInterval(timerInterval);
      };
    }, [isRunning]);

    const startTimer = () => {
      setIsRunning(true);
    };

    const stopTimer = () => {
      setIsRunning(false);
    };

    const resetTimer = () => {
      setTime(0);
      setIsRunning(false);
    };

    return (
      <div>
        <h1>Timer: {time}</h1>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    );
  };
};
