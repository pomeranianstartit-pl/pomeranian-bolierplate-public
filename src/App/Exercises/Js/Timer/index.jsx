import React, { useState, useEffect } from 'react';

export const TimerInterval = () => {
  const [counter1, setCounter1] = useState(0);
  const [click1, handleClick1] = useState(false);

  function handleOnCounting() {
    if (click1) handleClick1(false);
    if (!click1) handleClick1(true);
  }

  useEffect(() => {
    if (!click1) return;

    const interwal = setInterval(() => {
      setCounter1(counter1 + 1);
    }, 1000);

    return () => {
      clearInterval(interwal);
    };
  }, [click1, counter1]);

  function handleReset() {
    setCounter1(0);
    handleClick1(false);
  }

  return (
    <div>
      <div>Timer: {counter1} sec</div>
      <button onClick={handleOnCounting}>{click1 ? 'stop' : 'start'}</button>
      <button onClick={handleReset}>restart</button>
    </div>
  );
};
