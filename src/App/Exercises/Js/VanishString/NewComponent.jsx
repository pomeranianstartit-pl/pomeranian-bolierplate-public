import { useState } from 'react';

export const NewComponent = () => {
  const [text, setText] = useState('Znikam po 3 sekundach');
  const handleStart = () => {
    setTimeout(() => {
      setText('');
    }, 3000);
  };
  return (
    <div>
      <button onClick={handleStart}>Kliknij</button>
      <p>{text}</p>
    </div>
  );
};
