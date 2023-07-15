import React from 'react';

import './style.css';

export function Cwiczenie2() {
  const [counter, setCounter] = React.useState(0);
  function handleOnClick() {
    setCounter(counter + 1);
  }
  let postfix = 'razy';
  if (counter === 1) {
    postfix = 'raz';
  } else if (counter === 0 || counter > 1) {
    postfix = 'razy';
  } else if (counter > 1) {
    postfix = 'razy';
  }

  // const postfix = (counter === 1) ? "raz" : "razy"
  // ? then
  // : else
  // && - koniunkcja (AND) => i to, i to musi być prawdą
  // || - alternatywa (OR) => albo to, albo to musi być prawdą
  return (
    <div className="blok-8__cwiczenie-2">
      <h2>Cześć!</h2>

      <button onClick={handleOnClick}>
        Kliknięto we mnie {counter} {postfix}
      </button>
    </div>
  );
}
