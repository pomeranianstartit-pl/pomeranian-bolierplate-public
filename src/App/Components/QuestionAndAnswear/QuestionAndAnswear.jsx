import './styles.css';
import { useState } from 'react';

export const QuestionAndAnswear = ({ question, answer }) => {
  const [isVisible, setIsVisible] = useState(false);
  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="FAQ">
      <div className="pytanie1">
        <h1 onClick={handleClick}>{question}</h1>
        <hr></hr>
        <p>{isVisible && answer}</p>
      </div>
    </div>
  );
};
