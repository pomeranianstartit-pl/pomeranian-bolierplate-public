import { useState } from 'react';

export const JsSetTimeout = () => {
  const [text, setText] = useState('jakiś tekst');
  const [timeoutId, setTimeoutId] = useState();

  const handleStart = () => {
    const timeout = setTimeout(() => {
      setText('Upłynęła sekunda');
    }, 1000);

    setTimeoutId(timeout);

    console.log(timeoutId, 'setTimeout przypisane z jakimś id');
  };

  const handleStop = () => {
    clearTimeout(timeoutId);
  };

  return (
    <div>
      <h2>{text}</h2>
      <button onClick={handleStart}>Start</button>

      <button onClick={handleStop}>Stop</button>
    </div>
  );
};
