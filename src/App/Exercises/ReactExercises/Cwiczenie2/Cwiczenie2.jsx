import React from 'react';
import './style.css';
export function Cwiczenie2() {
  const [counter, setCounter] = React.useState(0);
  function handleOnClick() {
    setCounter(counter + 1);
  }
  let postfix;

  //komentarz

  if (counter === 1) {
    postfix = 'raz';
  } else {
    postfix = 'razy';
  }
  return (
    <div className="blok-8__cwiczenie-2">
      <h2>Cześć!</h2>
      <button onClick={handleOnClick}>
        Kliknięto we mnie {counter} {postfix}
      </button>
    </div>
  );
}
