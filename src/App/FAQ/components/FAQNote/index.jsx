import { useState } from 'react';
import toggleArrow from '../../../Images/toggle-arrow.svg';
import './style.css';

export function FAQNote(props) {
  const [display, setDisplay] = useState(false);

  function handleButton() {
    setDisplay(!display);
  }
  const arrowRotate = display ? '' : 'rotate';
  return (
    <div className="faq-note-wrapper" onClick={handleButton}>
      {' '}
      <h2>
        <img className={arrowRotate} src={toggleArrow} alt="toggle arrow" />
        {props.title}
      </h2>
      {display && <div>{props.desciption}</div>}
    </div>
  );
}
