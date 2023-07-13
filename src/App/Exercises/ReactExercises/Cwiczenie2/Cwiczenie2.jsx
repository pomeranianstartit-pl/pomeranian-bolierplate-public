import React from 'react';

import './style.css';

export function Cwiczenie2() {
  const [state, setState] = React.useState(0)
  function handleClick(event) {
    console.log(event)
    setState(state + 1)
  }



  return (
    <div>
      <h1>cześć</h1>
      <div className='columns'>
        <button onClick={handleClick}>kliknieto mnie {state} {(state === 1) ? 'raz' : 'razy'}</button>
      </div>

    </div>
  );
}
