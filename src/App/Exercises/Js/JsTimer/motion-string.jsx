import { useEffect, useState } from 'react';
import './styles.css';

export const MotionString = () => {
  function clickHandle() {
    setRunning(!running);
  }
  const MAX_VALUE = 160;
  const [running, setRunning] = useState(false);
  const text = 'I like java Script.';

  const [value, setValue] = useState(0);
  const [value1, setValue1] = useState(-MAX_VALUE);
  useEffect(() => {
    if (!running) return;
    const interval = setInterval(() => {
      setValue((prevValue) => prevValue + 0.5);
      if (value > MAX_VALUE) {
        setValue(-MAX_VALUE);
      }
      setValue1((prevValue1) => prevValue1 + 0.5);
      if (value1 > MAX_VALUE) {
        setValue1(-MAX_VALUE);
      }
    }, 17);
    return () => {
      clearInterval(interval);
    };
  }, [running, value, value1]);
  useEffect(() => {
    //... wykonaj ten kod
    setRunning(true);
    // handleStart();
  }, []);
  return (
    <div>
      <div className="container" style={{ width: MAX_VALUE }}>
        <div
          className="motion-string"
          id="first"
          style={{ left: value, width: MAX_VALUE }}
        >
          {text}
        </div>
        <div
          className="motion-string"
          id="second"
          style={{ left: value1, width: MAX_VALUE }}
        >
          {text}
        </div>
      </div>
      <button onClick={clickHandle}>Kliknij tutej</button>
    </div>
  );
};
//
