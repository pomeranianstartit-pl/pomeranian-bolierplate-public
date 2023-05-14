import React, { useState } from 'react';
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
        <button value={IsOpen} onClick={clickHandler}>
          {`${IsOpen}`}
        </button>
      </div>

      <div className="box">
        <h1 className="header">{question}</h1>

       {IsOpen && <a className="input">{answear}</a>}
      </div>
    </div>
  );
};
