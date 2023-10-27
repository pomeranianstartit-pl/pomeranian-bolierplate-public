import { StepContext } from '@mui/material';
import { useState, useEffect } from 'react';

export const Exercise = () => {
  // ćwiczenie
  // wyświetl przycisk, któy po kliknięciu wyreneruje nam napis
  // napis powinien zniknąć po 3 sekundach od pokazania

  const [text, setText] = useState('Znikam po 3 sek');
  const handleClick = () => {
    const timeout = setTimeout(() => {
      setText('');
    }, 3000);
  };

  return (
    <div>
      <h3>Ćwiczenie VanishString</h3>
      <div>{text}</div>
      <button onClick={handleClick}>Wyświetl napis</button>
    </div>
  );
};
