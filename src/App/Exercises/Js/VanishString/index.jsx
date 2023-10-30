import React, { useState } from 'react';

export const VanishString = () => {
  const [text, setText] = useState();

  const handleButtonClick = () => {
    setText('Hello World');

    setTimeout(() => {
      // po 3 sekundach resetujemy tekst do poprzedniej oryginalnej wartosci
      setText();
    }, 3000);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Generate Text</button>
      <div>{text}</div>
    </div>
  );
};
