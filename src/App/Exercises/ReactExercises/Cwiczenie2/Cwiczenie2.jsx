import React from 'react';

import './style.css';

export function Cwiczenie2() {
  const [counter, setCounter] = React.useState(0);

  function handleOnClick() {
    setCounter(counter + 1);
  }

  const postfix =
    counter === 1 // if (counter === 1)
      ? // then
      'raz'
      : // else
      'razy';

  // && - konciunkcja(and) => i to i to musi byc prawdą
  // || - alternatywa (OR) => albo to albo to musi być prawdą

  return (
    <div className="blok-8__cwiczenie-2">
      <h2>Cześć!</h2>
      <button onClick={handleOnClick}>
        {' '}
        Kliknięto we mnie {counter} {postfix}
      </button>
    </div>
  );
}
