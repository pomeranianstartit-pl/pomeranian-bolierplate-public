import React, { useState } from 'react';

import './style.css';

// 1. Zadanie 1. Dodać element <button>Jakiś tekst</button>
// 2. Import useState z React
// 3. Zadeklarowanie zmiennej która będzie przetrzymywać stan
// 4. Zadeklarowanie zmiennej która będzie funkcją zmieniającą stan
// 5. Ostylować

// 1. Zadanie 2. Dodać nowy useState do liczenia klikniec
// 2. Inkrementowac (+1) nową zmienną Counter po kadym kliknięciu
// 3. Wyświtlić ile razy został kliknięty

export function Events() {
  const [text, setText] = useState('Nie kliknięto we mnie');
  const [counter, setCounter] = useState(0);

  const [inputText, setInputText] = useState('');



  function handleOnClick() {
    setText('Kliknięto we mnie');

    // if...else zastosowanie

    if (counter >= 3) {
      setCounter((counter) => counter + 2);
    } else {
      setCounter((counter) => counter + 1);
    }
  }

  // if + if
  // if (counter < 3) {
  // setCounter((counter) => counter + 1);
  //  }

  // Ternary operator
  //counter >= 3
  // ? setCounter((counter) => counter + 2)
  // : setCounter((counter) => counter + 1);


  // If..else if..else
  // if (counter >= 5) {
  //   setCounter((counter) => counter + 2);
  // } else if (counter >= 3) {
  //   setCounter((counter) => counter + 3);
  // } else {
  //   setCounter((counter) => counter + 1);
  // }

  function handleOnChange(event) {
    setInputText(event.target.value);
  }

  function handleGreeting() {
    alert(`Cześć 👋 ${inputText} 🥳`);
  }

  return (
    <div>
      <h2>Cześć! 👋</h2>
      <input
        className="evets-input"
        type="text"
        value={inputText}
        onChange={(event) => handleOnChange(event)}
      />
      <button className="events-btn" onClick={handleGreeting}>
        Kliknij
      </button>
      <button className="events-btn" onClick={handleOnClick}>

        {counter > 0 ? `${text} ${counter} razy` : text}
      </button>
    </div>
  );
}
