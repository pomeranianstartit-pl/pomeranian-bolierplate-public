/* eslint-disable prettier/prettier */
import './styles.css';
import { useState, useEffect } from 'react';



export const Timer = () => {
  const [time, setTime] = useState();



  ;
      

  function handleStart() {

  }
          function handleReset() {

  }
  return (
    <div>
      <h1>Timer</h1>
      <button onClick={handleStart}>start/stop</button>
      <button onClick={handleReset}>reset</button>
    </div>
  );
};
