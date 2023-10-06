import { useState } from 'react';

export function SingleQuesion({ answer, quesion }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="faq-item">
      <div onClick={() => setIsOpen(!isOpen)} className="faq-item-header">
        <img src="/chevron.svg" alt="" />
        <h2 className="faq-item-title"> {quesion}</h2>
        <p className="faq-item-text">{answer}</p>
      </div>
      {isOpen && <p className="faq-item-text">{answer}</p>}
    </div>
  );
}
