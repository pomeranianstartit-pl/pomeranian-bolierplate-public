import React, { useState, useEffect } from 'react';

// komponent Timer ma wyswietlac aktualny czas w sekundach i umozliwiac jego start, zatrzymanie i restart

export const Timer = () => {
  const [count, setCount] = useState(0); // przechowuje aktualny stan timera w sekundach
  const [running, setRunning] = useState(false); // okresla czy timer dziala lub jest zastopowany

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000); // uruchamiamy interval co sekunde jesli running jest ustawionena true albo zatrzymac jesli jest false
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [running]);

  const handleStartStop = () => {
    // to obsluguje przycisk startstop
    setRunning(!running);
  };

  const handleRestart = () => {
    // to ma obslugiwac przycisk restart
    setCount(0);
  };

  return (
    <div>
      <div>{count} sec</div>
      <button onClick={handleStartStop}>{running ? 'Stop' : 'Start'}</button>
      <button onClick={handleRestart}>Restart</button>
    </div>
  );
};
