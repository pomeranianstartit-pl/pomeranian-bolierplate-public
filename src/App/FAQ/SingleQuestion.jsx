import React, { useState } from 'react';
import { ReactComponent as Chevron_down } from '../Images/chevron_down.svg';
export const SingleQuestion = (props) => {
  const question = props.question;
  const answear = props.answear;

  const [IsOpen, setIsOpen] = useState(true);
  const clickHandler = () => {
    setIsOpen(!IsOpen);
    
  };

  return (
    <div>
      <div>
        <button onClick={clickHandler}>
          {' '}
          <Chevron_down />{' '}
        </button>
      </div>

      <div className="box">
        <h1 className="header">{question}</h1>

        {IsOpen && <a className="input">{answear}</a>}
      </div>
    </div>
  );
};
