import { useState } from 'react';

import toggleArrow from '../../../Images/toggle-arrow.svg';

import './styles.css';

export function FAQNote(props) {
  const [display, setDisplay] = useState(false);

  function handleButton() {
    setDisplay(!display);
  }

  // 1 sposób na dynamiczne nadawanie klasy - skrócony if
  const arrowRotate = display ? '' : 'rotate';

  // 2 sposób na dynamiczne nadawanie klasy - if
  // let arrowRotate;

  // if (display) {
  //   arrowRotate = '';
  // } else {
  //   arrowRotate = 'rotate';
  // }

  return (
    <div className="faq-note-wrapper" onClick={handleButton}>
      <h2>
        <img className={arrowRotate} src={toggleArrow} alt="toggle arrow" />
        {props.title}
      </h2>
      <p>{props.desciption}</p>

      {display && <div>Wyświetl mnie!</div>}
    </div>
  );
}
