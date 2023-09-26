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
      <div className="title">
        <h2>{props.title}</h2>
      </div>
      {display && <div>{props.desciption}</div>}

      <button onClick={handleButton}>Kliknij</button>
    </div>
  );
}

export function FAQ() {
  return (
    <div className="faq">
      <FAQNote
        title="Jak mogę zapisać się na szkolenie?"
        desciption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend rutrum ipsum, leo et in. Mattis porttitor volutpat placerat suspendisse ante in cursus etiam ullamcorper. Sollicitudin egestas aliquam, adipiscing adipiscing iaculis habitant. Viverra pretium tincidunt nisl pellentesque ut adipiscing non.Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      />
      <FAQNote
        title="Jak mogę zapisać się na szkolenie?"
        desciption="teasdasdasdasdst2"
      />
      <FAQNote
        title="Jak mogę zapisać się na szkolenie?"
        desciption="zzzzzzzzzzzztest3"
      />
      <FAQNote title="Kot ma ale" desciption="aaaaaaaaaaaaaaaaaaatest4" />
      <FAQNote
        title="Ile kobieta powinna wziąć na klate"
        desciption="xxxxxxxxxxxxtest5"
      />
    </div>
  );
}
