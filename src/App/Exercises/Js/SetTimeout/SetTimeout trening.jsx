import './styles.css';
import { useState, useEffect } from 'react';

export const SetTimeout = () => {





  const [count, setCount] = useState(0);


  function zwiekszCzas() {
    let id = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }
  useEffect(zwiekszCzas, [])



  return (
    <div>
      <h1>useEffect, setTimeout, setInterval</h1>
      <p>Value: {count}</p>
      {/* <button onClick={handleOnClick}>Increment Value</button> */}
    </div>
  );

};
