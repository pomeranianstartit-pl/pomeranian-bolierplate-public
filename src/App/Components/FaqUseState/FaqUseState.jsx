import React, {useState} from 'react';

import './style.css';

export function seeAnswer()
  const [text, setText] = useState('Kliknij');
  const ifTrue = true;

  function clickHandler() {
    setText(!ifTrue)
  }

  return (
    <div>
      <h2>Przycisk pokazujący i chowający tekst</h2>
      <button className='' onClick={clickHandler2}>Ukryj/pokaż</button>
      {pokaz && <p>Teraz mnie widać</p>}
    </div>
  )

