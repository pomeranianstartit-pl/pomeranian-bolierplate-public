import { useState } from 'react';
import { ShowMoreIcon } from './ShowMoreIcon';
import './styles.css';

export function FAQNote(props) {
  const [display, setDisplay] = useState(false);

  function handleButton() {
    setDisplay(!display);
  }

  const arrowRotate = display ? '' : 'rotate';

  return (
    <div className="faq-note-wrapper">
      <h4 onClick={handleButton}>
        <ShowMoreIcon className={arrowRotate} />
        <span className="title-style">{props.title}</span>
      </h4>

      {display && <p className="description-style">{props.desciption}</p>}
    </div>
  );
}
