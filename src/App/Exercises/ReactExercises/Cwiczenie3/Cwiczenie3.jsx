import React from 'react';

import './style.css';

export function Cwiczenie3() {
  const [display, setDisplay] = React.useState(true);

  function handleOnClick() {
    setDisplay(!display);
  }

  let buttonText = display === true ? 'ukryj' : 'pokaż';

  return (
    <div>
      <h2>See or not!</h2>

      <div className="blok-9__cwiczenie-2">
        <button onClick={handleOnClick}>{buttonText}</button>
        {display === true && <p>Teraz mnie widać</p>}
      </div>
    </div>
  );
}
