import { useState } from 'react';

import toogleArrow from '../../../Images/toggle-arrow.svg'

import './styles.css'

export function FAQNote(props) {
  const [display, setDisplay] = useState(false);

  function handleButton() {
    setDisplay(!display);
  }

  return (
    <div className="faq-note-wrapper" onClick={handleButton}>
      <h2>
        <img src={toogleArrow} alt="toogle arrow" />
        {props.title}</h2>
      <p>{props.desciption}</p>

      {display && <div>...</div>}
      </div>

  );
}