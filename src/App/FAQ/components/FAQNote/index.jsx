import { useState } from 'react';
import './styles.css';
import Button from '/home/patryk/pomeranian-bolierplate-public/src/App/Images/chevron.right.svg';

export function FAQNote(props) {
  const [display, setDisplay] = useState(false);

  function handleButton() {
    setDisplay(!display);
  }

  const arrowRotate = display ? 'rotate' : '';

  return (
    <div className="faq-note-wrapper">
      <div>
        <h2>
          <img
            className={arrowRotate}
            onClick={handleButton}
            src={Button}
            alt="SVG logo image"
          ></img>
          {''}
          {props.title}
        </h2>
        <p>{props.desciption}</p>
      </div>

      {display && (
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend
          rutrum ipsum, leo et in. Mattis porttitor volutpat placerat
          suspendisse ante in cursus etiam ullamcorper. Sollicitudin egestas
          aliquam, adipiscing adipiscing iaculis habitant. Viverra pretium
          tincidunt nisl pellentesque ut adipiscing non.Lorem ipsum dolor sit
          amet, consectetur adipiscing elit
        </div>
      )}
    </div>
  );
}
