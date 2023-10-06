import { useState } from 'react';

export function SingleQuestion({ answer, question }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Faq-content">
      <div onClick={() => setIsOpen(!isOpen)} className="Faq-imagetitle">
        <img src="/Vector.svg" alt="" />
        {question}
      </div>
      <hr className="Faq-line"></hr>
      {isOpen && <div>{answer}</div>}
    </div>
  );
}
