import React, { useState, useEffect } from 'react';

export const Exercise7 = () => {
  const [countdown, setCountdown] = useState(10);
  const [running, setRunning] = useState(true);

  useEffect(() => {
    let timer;

    if (running && countdown > 0) {
      timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
    }

    return () => clearTimeout(timer);
  }, [countdown, running]);

  const handleToggle = () => {
    setRunning(!running);
  };

  return (
    <div>
      <p>Odliczanie: {countdown}</p>
      <button onClick={handleToggle}>{running ? 'Zatrzymaj' : 'Uruchom'}</button>
    </div>
  );
};
















