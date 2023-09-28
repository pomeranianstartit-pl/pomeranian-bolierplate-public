import { useState } from 'react';

import toggleArrow from '../../../Images/toggle-arrow.svg';

export function FaqNote(props) {
  const [display, setDisplay] = useState(false);

  function handleButton() {
    setDisplay(!display);
  }

  return (
    <div className="faq-note-wrapper" onClick={handleButton}>
      <div>
        {/* <div className='faq-note-wrapper-title> */}
        <h2>
          <img src={toggleArrow} alt="Tu powinien być obrazek" />
          {props.title}
        </h2>
      </div>
      <p>{props.desciption}</p>
      {display && (
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend
          rutrum ipsum, leo et in. Mattis porttitor volutpat placerat
          suspendisse ante in cursus etiam ullamcorper. Sollicitudin egestas
          aliquam, adipiscing adipiscing iaculis habitant. Viverra pretium
          tincidunt nisl pellentesque ut adipiscing non.Lorem ipsum dolor sit
          amet, consectetur adipiscing elit Wyświetl mnie
        </div>
      )}
    </div>
  );
}
