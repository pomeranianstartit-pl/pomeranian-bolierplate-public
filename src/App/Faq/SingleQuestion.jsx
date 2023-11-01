import ArrowBotton from '../Images/chevron.down.svg';
import { useState } from 'react';
export function SingleQuestion({ answer, question }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="faq-item">
      <div onClick={() => setIsOpen(!isOpen)} className="faq-header">
        <img src={ArrowBotton}></img>
        <h2 className="faq-title">{question}</h2>
      </div>
      {isOpen && <p>{answer}</p>}
    </div>
  );
}
