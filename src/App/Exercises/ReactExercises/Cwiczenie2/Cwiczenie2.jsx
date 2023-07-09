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
  }
  return (
    <div className="blok-8__cwiczenie-2">
      <h1>Cześć!</h1>
      <button onClick={handleOnClick}>
        Kliknięto we mnie {counter} {postfix}{' '}
      </button>
    </div>
  );
}
