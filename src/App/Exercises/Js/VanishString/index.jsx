import React, { useState } from 'react';

export const VanishString = () => {
  const [text, setText] = useState('Zniknięcie tekstu');
  setTimeout(() => {
    console.log('setTimeout');

    setText('              ');
  }, 3000);
  return (
    <div className="butt">
      <button>{text}</button>
    </div>
  );
};
