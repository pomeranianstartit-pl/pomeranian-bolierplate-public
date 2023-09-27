import { useState } from 'react';

import { ChevronIcon } from '../../Components/Icons/faq/ChevronIcon';

import './style.css';

export function FAQNote(props) {
  const [display, setDisplay] = useState(false);

  function handleButton() {
    setDisplay(!display);
  }
  // const arrowRotate = display ? '' : 'rotate';

  let arrowRotate;

  if (display) {
    arrowRotate = 'rotate';
  } else {
    arrowRotate = 'chevron';
  }

  return (
    <div className="faq-note-wrapper">
      <div className="title">
        <button className={arrowRotate} onClick={handleButton}>
          <ChevronIcon />
        </button>
        <h2 className="title">{props.title}</h2>
        {display && <p>{props.desciption}</p>}
      </div>

      {/* {display && <p>{props.desciption}</p>} */}
    </div>
  );
}
