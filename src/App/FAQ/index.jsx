import { useState } from 'react';
import './styles.css';

function FAQNote(props) {
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

export function FAQ() {
  return (
    <div className="faq">
      <h1>Faq</h1>
      <FAQNote
        title="Ile facet powinien wziąć na klate"
        desciption="testasdasdasd1"
      />
      <FAQNote title="Ile lat żyją psy" desciption="teasdasdasdasdst2" />
      <FAQNote title="Ala ma kota" desciption="zzzzzzzzzzzztest3" />
      <FAQNote title="Kot ma ale" desciption="aaaaaaaaaaaaaaaaaaatest4" />
      <FAQNote
        title="Ile kobieta powinna wziąć na klate"
        desciption="xxxxxxxxxxxxtest5"
      />
    </div>
  );
}
