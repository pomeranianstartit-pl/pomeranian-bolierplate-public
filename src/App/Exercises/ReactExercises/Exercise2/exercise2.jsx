import React from 'react';

import './style.css';

export function Exercise2() {
  const [counter, setCounter] = React.useState(0);

  function RaiseCounter() {
    setCounter(counter + 1);
  }

  let postfix = 'razy';
  if (counter === 1) {
    postfix = 'raz';
  }

  return (
    <div className="block-8__exercise-2">
      <h2>Cześć</h2>
      <button onClick={RaiseCounter}>
        Kliknięto we mnie {counter} {postfix}
      </button>
    </div>
  );
}
