import React, { useState } from 'react';

export function ReactIfStatements() {
  const [clicks, setClicks] = useState(0);
  const [text, setText] = useState('start');

  const handleClick = () => {
    // if (warunek jezeli będzie spełniony) { ... to wykonaj kod }
    // else { (warunek nie został spełniony)... wykonaj inny kod }

    // (clicks < 5) -> warunek jeżeli clicks jest mniejszy od 5
    if (clicks < 5) {
      //
      const newClicks = clicks + 1;
      // `` -> templateString
      // '' -> single string
      // "" -> double quotes string

      // const newText = 'Teraz jest ' + newClicks + ' kliknięć';
      const newText = `Teraz jest ${newClicks} kliknięć`;

      setClicks(newClicks);
      setText(newText);
    } else {
      // jeżeli warunek nie został spełniony to wykonaj ten kod:
      setText('Koniec zabawy');
    }
  };
  return (
    <div>
      <button onClick={handleClick}>Kliknij mnie</button>
      <div>{text}</div>
    </div>
  );
}
