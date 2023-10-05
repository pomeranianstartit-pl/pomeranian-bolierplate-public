import { useState } from 'react';

export function SingleQuestion({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="faq-style">
      <div>
        <div className="div1">
          <img className="button-text-up" src="../chevron.down.svg" alt="" />
          <div onClick={() => setIsOpen(!isOpen)} className="button-text">
            {question}
            <span className="lorem">{answer}</span>
          </div>
        </div>
      </div>

      {isOpen && <p className="faq-style">{answer}</p>}
    </div>
  );
}
