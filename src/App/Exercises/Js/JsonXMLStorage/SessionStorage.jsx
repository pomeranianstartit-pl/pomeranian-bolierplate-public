import { Button } from './../../../Components/Button';
import { useState } from 'react';

const STORAGE_KEY = 'session-count';

export function SessionStorage() {
  const sessionCounter = parseInt(sessionStorage.getItem(STORAGE_KEY));
  const [counter, setCounter] = useState(sessionCounter || 0);

  const handleIncrement = () => {
    const newCount = counter + 1;
    setCounter(newCount);
    sessionStorage.setItem(STORAGE_KEY, newCount);
  };

  const handleReset = () => {
    setCounter(0);
    sessionStorage.removeItem(STORAGE_KEY);
  };

  return (
    <div>
      <h3>Session Storage Example</h3>

      <Button onClick={handleIncrement}>Increment</Button>
      <br />

      <br />
      <Button onClick={handleReset}>Reset</Button>

      <p>count: {counter}</p>
    </div>
  );
}
