import React, { useState } from 'react';

import './style.css';

//1. Dodać element <button>
//2. Import useState z React
//3. Zadeklarowanie zmiennej która będzie przetrzymywać zmienna stanu
//4. Zadeklarowanie zmiennej która będzie funkcją zmieniającą stan
//5. Ostylować

export function Events() {
  const [text, setText] = useState('Nie kliknięto we mnie');
  let text2 = 'Nie kliknięto we mnie 2';

  function handleOnClick() {
    setText('Kliknięto we mnie');
  }

  // Zwykła funkcja

  function name() {
    console.log('name1');
  }

  name();

  // Funkcja strzałkowa

  const name2 = () => {
    console.log('name2');
  };

  name2();

  return (
    <div>
      <h2>Cześć i czołem!</h2>
      <button onClick={handleOnClick}>{text}</button>
    </div>
  );
}
