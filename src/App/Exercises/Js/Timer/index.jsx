import { useState, useEffect } from 'react';
import { SecondTimer } from './SecondComponent';

export const Timer = () => {
  //wyświetl na stronie timer (np.: "0 sec"), którego początkowym stanem będzie 0.
  //stwórz przycisk start - stop i restart, żeby timer wrócił do 0.
  // inna metoda

  const [timerValue, setTimerValue] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);

  useEffect(() => {
    let timerInterval;

    if (timerRunning) {
      timerInterval = setInterval(() => {
        setTimerValue((prevValue) => prevValue + 1);
      }, 1000);
    } else {
      clearInterval(timerInterval);
    }

    return () => {
      clearInterval(timerInterval);
    };
  }, [timerRunning]);

  const startTimer = () => {
    setTimerRunning(true);
  };

  const stopTimer = () => {
    setTimerRunning(false);
  };

  const resetTimer = () => {
    setTimerValue(0);
  };

  return (
    <div>
      <h2>Ćwiczenie Licznik</h2>
      <div>{timerValue}</div>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Restart</button>
      <SecondTimer />
    </div>
  );
};
