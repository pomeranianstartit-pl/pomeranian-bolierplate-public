import React from 'react';

import './style.css';

export function Exercise2() {
  const [counter, setCounter] = React.useState(0);

  function RaiseCounter() {
    setCounter(counter + 1);
  }

  return (
    <div className="block-8__exercise-2">
      <h2>Cześć</h2>
      <button onClick={RaiseCounter}>Kliknięto we mnie {counter} razy</button>
    </div>
  );
}
