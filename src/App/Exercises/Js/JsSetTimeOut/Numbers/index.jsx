import { useState } from 'react';

export const Exercise = () => {
  const [text, setText] = useState('Domyślny tekst');

  const [timeoutId, setTimeoutId] = useState('Domyślny tekst');

  const handleStart = () => {
    // setTimeout - wykonaj sie po określonym czasie - 1s === 1000ms

    const timeout = setTimeout(() => {
      setText('Upłynęła sekunda');
    }, 1000);

    setTimeoutId(timeout);
  };

  const handleStop = () => {
    clearTimeout(timeoutId);
  };

  return (
    <div>
      <div>{text}</div>

      <button onClick={handleStart}>Start</button>

      <button onClick={handleStop}>Stop</button>
    </div>
  );
};
