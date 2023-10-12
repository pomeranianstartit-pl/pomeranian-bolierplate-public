import { useState } from 'react';
import './faq.css';

export function SingleQuestionFaq({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="faq-style">
      <div onClick={() => setIsOpen(!isOpen)} className="question">
        <img className="button-text-up" src="../chevron.down.svg" alt="" />
        <h3 className="button-text">{question}</h3>
      </div>
      {isOpen && <p className="faq-style">{answer}</p>}
    </div>
  );
}
