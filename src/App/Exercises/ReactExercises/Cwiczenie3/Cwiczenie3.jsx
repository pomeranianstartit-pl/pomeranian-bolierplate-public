import React from 'react';
import './style.css';

export function Cwiczenie3() {
  const [display, setDisplay] = React.useState(true); //mozna uzyc jakiegokolwiek slowa zamiast display, ale pozytywne znaczenia raczej uzywamy
  function handleOnClick() {
    setDisplay(!display);
  }

  let buttonText = display === true ? 'Ukryj' : 'Pokaż';

  return (
    <div className="blok-8__cwiczenie-3">
      <h2>Cześć!</h2>
      <button onClick={handleOnClick}>{buttonText}</button>
      {display === true && <p>Teraz mnie widać</p>}
    </div>
  );
}
