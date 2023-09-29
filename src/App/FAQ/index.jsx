import { useState } from 'react';
import './styles.css';

function FAQNote(props) {
  console.log(props, 'props');
  const [display, setDisplay] = useState(false);
  function handleButton(){
    setDisplay(!display);
  }
  return (
    <div className="faq-note-wrapper">
      <h2>{props.title}</h2>
      <p>{props.desciptin}</p>
      {display && <div>wyświetl mnie!</div>}
      <button onClick={handleButton}>kliknij</button>
    </div>
  );
}

export function FAQ() {
  return (
    <div className="faq">
      <h1>Faq</h1>
     
      <FAQNote title="ile facet powienien wziąć na klatę" desciptin="aaaa"/>
      <FAQNote title="ile lat żyją psy" desciptin="bbb"/>
      <FAQNote title="A" desciptin="ccc"/>
      <FAQNote title="B" desciptin="ddddd"/>
      <FAQNote title="ile kobieta powinna wziąć na klatę" desciptin="ffff"/>
    </div>
  );
}