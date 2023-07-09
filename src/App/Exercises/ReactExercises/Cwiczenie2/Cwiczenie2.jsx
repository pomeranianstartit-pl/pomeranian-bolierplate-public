import React from 'react';

import './style.css';

export function Cwiczenie2() {
  const [counter, setCounter] = React.useState(0);

  function handleOnClick() {
    setCounter(counter + 1);
  }

  const postfix = counter === 1 ? 'raz' : 'razy';

  return (
    <div>
      <h2>Cześć!</h2>

      <div className="blok-8__cwiczenie-2">
        <button onClick={handleOnClick}>
          kliknięto we mnie {counter} {postfix}
        </button>
      </div>
    </div>
  );
}
