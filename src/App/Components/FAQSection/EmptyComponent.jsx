import { useState } from 'react';
import './styles.css';

export const FAQSection = (props) => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div className="faq-section">
      <div className="question" onClick={handleClick}>
        {props.question}
      </div>
      <div className={isClicked ? 'answer' : 'none'}>{props.answer}</div>
    </div>
  );
};
