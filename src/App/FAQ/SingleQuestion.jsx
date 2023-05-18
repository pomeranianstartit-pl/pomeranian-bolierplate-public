import './styles.css';
import React from 'react';
import { useState } from 'react';
import { ReactComponent as Vector } from '../Components/Icons/Vector.svg';

export const SingleQuestion = (props) => {
  const question = props.question;
  const answer = props.answer;

  const [isTrue, setIsTrue] = useState(true);

  const clickHandler = () => {
    setIsTrue(!isTrue);
  };

  return (
    <div className="box">
      <h2 className="naglowek">
        <button onClick={clickHandler}>
          <Vector />
        </button>{' '}
        {question}
      </h2>
      <hr />
      <p className="answer">{!isTrue && answer}</p>
    </div>
  );
};
