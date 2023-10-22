import { useEffect, useState } from 'react';
import './styles.css';

export const MotionString = () => {
  function clickHandle() {
    setRunning(false);
  }
  const maxValue = 210;
  const [running, setRunning] = useState(false);

  const [value, setValue] = useState(0);
  const [value1, setValue1] = useState(-maxValue);
  useEffect(() => {
    if (!running) return;
    const interval = setInterval(() => {
      setValue((prevValue) => prevValue + 1.5);
      if (value > maxValue) {
        setValue(-maxValue);
      }
      setValue1((prevValue1) => prevValue1 + 1.5);
      if (value1 > maxValue) {
        setValue1(-maxValue);
      }
    }, 100);
    return () => {
      clearInterval(interval);
    };
  }, [running, value]);
  useEffect(() => {
    //... wykonaj ten kod
    setRunning(true);
    // handleStart();
  }, []);
  return (
    <div>
      <div className="container">
        <div className="motion-string" style={{ left: value, width: maxValue }}>
          I like JavaScript.
        </div>
        <div
          className="motion-string1"
          style={{ left: value1, width: maxValue }}
        >
          I like JavaScript.
        </div>
      </div>
      <button onClick={clickHandle}>Kliknij tutej</button>
    </div>
  );
};
//
