import { useState } from 'react';
// import togglearrow from '../../../Images/toggle-arrow.svg';
import { ArrowIcon } from '../../../Components/Icons/ArrowIcon';

export function FAQNote(props) {
  const [display, setDisplay] = useState(false);

  function handleButton() {
    setDisplay(!display);
  }

  return (
    <div className="faq-note-wrapper" onClick={handleButton}>
      <div>
        <h2>
          {/* <img className="img" src={togglearrow} alt={togglearrow} /> */}
          <ArrowIcon className="faqimg" />
          {props.title}
        </h2>
      </div>
      {display && (
        <div>
          {' '}
          <hr></hr>
          <p>{props.desciption}</p>
        </div>
      )}
    </div>
  );
}
