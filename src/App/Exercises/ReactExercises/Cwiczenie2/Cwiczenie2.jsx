import React from 'react';

import './style.css';

export function Cwiczenie2() {
  const [counter, setCounter] = React.useState(0);

  function handleOnClick() {
    setCounter(counter + 1);
  }

  let postfix = 'RAZY';
  if (counter === 1) {
    postfix = 'RAZ';
  }

  //  const postfix = (counter === 1) ? "raz" : "razy";

  // if (counter === 1){
  //  postfix="RAZ";
  //}
  //else if (counter === 0){
  //  postfix="RAZY"
  //}
  //else if (counter > 1){
  //  postfix="RAZY"
  //}

  //if (counter === 1) {
  //  postfix = "raz";
  //}
  //else if (counter === 0 || counter > 1) {
  //  postfix = "razy";
  //}

  // && - koniunkcja (AND) => i to, i to musi być prawdą
  // || - alternatywa (OR) => albo to, albo to musi być prawdą

  return (
    <div className="blok-8_Cwiczenie2">
      <h1>Cześć!</h1>

      <button onClick={handleOnClick} type="submit">
        KLIKNIĘTO WE MNIE {counter} {postfix}
      </button>
    </div>
  );
}
