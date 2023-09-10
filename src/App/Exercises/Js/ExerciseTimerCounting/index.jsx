import { useState } from 'react';

import './styles.css';

export const ExerciseTimerCounting = () => {
  const [counter, setCounter] = useState(0);
  const [timeoutId, setTimeoutId] = useState();
  const [intervalId, setIntervalId] = useState();
  const handleOnClick = () => {
    clearTimeout(timeoutId);
    const id = setTimeoutId(
      () => setCounter((prevValue) => prevValue + 1),
      2000
    );
    setTimeoutId(id);
  };

  // const handleCounter = () => {
  //   // if (intervalId) return;
  //   clearInterval(intervalId);
  //   const id = setInterval(() => {
  //     console.log('ustawiam counter na + 1');
  //     setCounter((prevValue) => prevValue + 1);
  //   }, 1000);
  //   setIntervalId(id);
  // };

  // export const SetTimeout = () => {
  //   const [value, setValue] = useState(0);
  //   const [counter, setCounter] = useState(0);
  //   const [timeoutId, setTimeoutId] = useState();
  //   const [intervalId, setIntervalId] = useState();
  //   const [message, setMessage] = useState('');
  //   const handleOnClick = () => {
  //     clearTimeout(timeoutId);
  //     const id = setTimeout(() => setValue((prevValue) => prevValue + 1), 2000);
  //     setTimeoutId(id);
  //   };

  return (
    <>
      <div>
        <div>Licznik = {counter}</div>
        <br />
        <button onClick={handleOnClick}>Start Button</button>
        {/* <button onClick={handleStopCounter}>Stop Button</button> */}
      </div>
    </>
  );
};
