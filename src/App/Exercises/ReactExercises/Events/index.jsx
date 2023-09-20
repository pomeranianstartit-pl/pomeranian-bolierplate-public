import React, { useState } from 'react';

import './style.css';

export function Events() {
  const [text, setText] = useState ("Nie kliknięto we mnie");

  function handleOnClick() {
    setText("Kliknięto we mnie");
  }
  return (
    <div>
      <h2>Cześć!</h2>
      <button onClick={handleOnClick}>{text}</button>
    </div>
  );
}


// 1. Dodać element <button>Jakiś tekst</button>

// 2. Import useState z React

// 3. Zadeklarowanie zmiennej która będzie przetrzymywać zmiennną stanu

// 4. Zadeklarowanie zmiennej która będzie funkcją zmieniającą stan

// 5. Ostylować