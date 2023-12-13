import { useState } from 'react';
import { NewComponent } from './NewComponent';

export const Exercices = () => {
  const [text, setText] = useState('Znikam po 3 sek');

  const handleStart = () => {
    // setTimeout - wykonaj sie po określonym czasie - 1s === 1000ms

    setTimeout(() => {
      setText('');
    }, 3000);
  };
  return (
    <div>
      <div>{text}</div>
      <button onClick={handleStart}>Kliknij</button>
      <NewComponent />
    </div>
  );
};
