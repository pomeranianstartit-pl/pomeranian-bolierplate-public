import React, { useState, useEffect } from 'react';

export const VanishString = () => {
  const [text1, setText1] = useState('');
  function handleOnClick1() {
    setText1('Kliknięto!');
  }

  useEffect(() => {
    const zniknij = setTimeout(() => {
      setText1('');
    }, 3000);

    return () => clearTimeout(zniknij);
  });
  return (
    <div>
      <button onClick={handleOnClick1}>Button</button>
      {text1}
    </div>
  );
};
