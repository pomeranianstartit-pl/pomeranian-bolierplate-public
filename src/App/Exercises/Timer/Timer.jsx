import './styles.css';
import { useState } from 'react';
export const Timer = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [timer, setTimer] = useState(0);

  function handleStopStart() {
    setIsRunning(!isRunning);
  }
  function handleRestart() {
    setTimer(0);
    setIsRunning(false);
  }
  return (
    <div>
      <h1>Timer</h1>
      <p>{timer}sec</p>
      <button onClick={handleStopStart}>{isRunning ? 'stop' : 'start'}</button>
      <button onClick={handleRestart}>restart</button>
    </div>
  );
};
