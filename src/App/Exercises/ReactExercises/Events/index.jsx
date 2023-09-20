import React, { useState } from 'react';

import './style.css';

// 1. Dodać element <button>Jakiś tekst</button>
// 2. Import useState z React
// 3. Zadeklarowanie zmiennej która będzie przetrzymywać stan
// 4. Zadeklarowanie zmiennej która będzie funkcją zmieniającą stan
// 5. Ostylować

export function Events() {
  const [text, setText] = useState('Kliknięto we mnie');
  const [counter, setCounter] = useState(0);
  function handleOnClick() {
    setText('Kliknięto we mnie');

    if (counter >= 3) {
      return setCounter((counter) => counter + 2);
    }

    setCounter((counter) => counter + 1);

    // If..else if..else
    // if (counter >= 5) {
    //   setCounter((counter) => counter + 2);
    // } else if (counter >= 3) {
    //   setCounter((counter) => counter + 3);
    // } else {
    //   setCounter((counter) => counter + 1);
    // }

    // Ternary operator
    // counter >= 3
    //   ? setCounter((counter) => counter + 2)
    //   : setCounter((counter) => counter + 1);

    // if..else
    // if (counter >= 3) {
    //   setCounter((counter) => counter + 2);
    // } else {
    //   setCounter((counter) => counter + 1);
    // }

    // if + if
    // if (counter < 3) {
    //   //         początkowa   początkowa + 1
    //   setCounter((counter) => counter + 1);
    // }
  }
}
