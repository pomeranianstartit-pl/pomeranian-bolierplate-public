import { useState } from 'react';

export const VanishString = () => {
  //ćwiczenie 1
  // wyświetl przycisk, który po kliknięciu wyrenderuje nam napis
  // napis powinien zniknąć po 3 sekundach od pokazania

  const [text, setText] = useState('Znikam po 3 sek.');
  const handleClick = () => {
    const timeout = setTimeout(() => {
      setText('');
    }, 3000);
  };

  return (
    <div>
      <h2>Ćwiczenie VanishString</h2>
      <div>{text}</div>
      <button onClick={handleClick}>Wyświetl napis</button>
    </div>
  );
};
