import { useState } from 'react';

import './styles.css';

function FaqNote(props) {
  console.log(props, 'props');

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

export function Faq() {
  return (
    <div className="faq">
      <h1>Faq</h1>

      <FaqNote title="Ile facet powinien wziąć na klate" desciption="test1" />

      <FaqNote title="Ile lat żyją psy" desciption="test1" />

      <FaqNote title="Ala ma kota" desciption="test1" />

      <FaqNote title="Kot ma ale" desciption="test1" />

      <FaqNote title="Ile kobieta powinna wziąć na klate" desciption="test1" />
    </div>
  );
}
