import { useEffect, useState } from 'react';
import { MotionString } from './motion-string';

export const JsTimer = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  function clickHandle() {
    if (!running) {
      setRunning(true);
    } else {
      setRunning(false);
      setTime(0);
    }
  }
  useEffect(() => {
    if (!running) return;
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [running, time]);

  // poniższe powoduje automatyczny start
  useEffect(() => {
    setRunning(true);
  }, []);

  return (
    <div>
      <div>{time}</div>
      <button onClick={clickHandle}>{running ? 'Stop' : 'Start'}</button>
      <p></p>
      <div>
        <MotionString />
      </div>
    </div>
  );
};
