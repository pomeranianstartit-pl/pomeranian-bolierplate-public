import { useState, useEffect } from 'react';

export const SecondTimer = () => {
  //wyświetl na stronie timer (np.: "0 sec"), którego początkowym stanem będzie 0.
  //stwórz przycisk start - stop i restart, żeby timer wrócił do 0.

  const [time, setTime] = useState(0);
  const [start, setStart] = useState(false);
  const handleClick = () => {
    setStart((prevState) => !prevState);
  };

  const handleRestart = () => {
    setTime(0);
    setStart(false);
  };

  useEffect(() => {
    if (!start) return;

    const interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [start, time]);
  useEffect(() => {
    setStart(true);
  }, []);
  return (
    <div>
      <div>Czas: {time}</div>
      <button onClick={handleClick}>{start ? 'Stop' : 'Start'}</button>
      <button onClick={handleRestart}>Restart</button>
    </div>
  );
};
