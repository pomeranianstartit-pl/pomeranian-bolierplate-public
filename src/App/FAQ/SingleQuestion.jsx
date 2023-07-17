import './styles.css';
import React, { useState } from 'react';
import togglearrow from '/root/projects/pomeranian-bolierplate-public/src/App/Images/toggle-arrow.svg';

export const SingleQuestion = ({ question, answer }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <div onClick={handleClick} className="single-question-div">
        <img src={togglearrow} alt="toggle-arrow" />
        <h1 className="faq-question">{question}</h1>
      </div>
      {isVisible && (
        <div className="single-answer-div">
          <p className="faq-answer">{answer}</p>
        </div>
      )}
    </div>
  );
};
