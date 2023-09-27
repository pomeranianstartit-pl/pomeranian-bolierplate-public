import { useState } from 'react';

export function FAQNote(props) {
  const [display, setDisplay] = useState(false);

  function handleButton() {
    setDisplay(!display);
  }

  return (
    <div className="faq-note-wrapper">
      <h2>{props.title}</h2>
      <p>{props.desciption}</p>

      {display && <div>Wyświetl mnie!</div>}

      <button onClick={handleButton}>Kliknij</button>
    </div>
  );
}
