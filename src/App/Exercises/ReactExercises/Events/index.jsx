import React, { useState } from 'react';

import './style.css';

// 1. Dodać nowy useState do liczenia kliknięć
// 2. Inkrementować nową zmienną counter po każdym kliknieciu
// 3. Wyświetlić ile razy został kliknięty

export function Events() {
  const [text, setText] = useState('Nie kliknięto we mnie');
  const [counter, setCounter] = useState(0);

  function handleOnClick() {
    setText('Kliknięto we mnie');
    setCounter((counter) => counter + 1);
  }

  return (
    <div>
      <h2>Cześć! 👋</h2>
      <button onClick={handleOnClick}>
        {counter > 0 ? `${text} ${counter} razy` : text}
      </button>
    </div>
  );
}
