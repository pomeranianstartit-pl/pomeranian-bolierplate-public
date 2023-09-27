import { useState } from 'react';
import ArrowIcon from './chevron.right.svg';

import './styles.css';

export function FAQNote(props) {
  const [display, setDisplay] = useState(false);

  function handleButton() {
    setDisplay(!display);
  }
  //const arrowRotate = display ? ' ' : 'rotate';
  let arrowRotate;

  if (display) {
    arrowRotate = '';
  } else {
    arrowRotate = 'rotate';
  }

  return (
    <div className="faq-note-wrapper">
      <h4 onClick={handleButton}>
        <img className={arrowRotate} src={ArrowIcon} alt="arrow" />
        <span className="title-style">{props.title}</span>
      </h4>

      {display && <p className="description-style">{props.desciption}</p>}
    </div>
  );
}
