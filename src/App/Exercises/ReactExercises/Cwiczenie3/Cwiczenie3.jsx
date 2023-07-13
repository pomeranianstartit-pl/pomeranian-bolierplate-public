import React from 'react';

import './style.css';

export function Cwiczenie3() {
  const [display, setDisplay] = React.useState(true);

  function handleClick() {

    if (display === true) {
      setDisplay(false)
    }
    else {
      setDisplay(true)
    }
  }


  return (
    <div>
      <h1>cześć</h1>
      <div className='columns'>
        <button onClick={handleClick}>Ukryj mnie </button>
        {display === true && <p>teraz mnie widać</p>}
      </div>

    </div>
  );
}
