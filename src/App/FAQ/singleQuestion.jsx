import { useState } from 'react';

export function SingleQuestion({ answer, question }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="questionBlock">
        <h4 className="questionHead">
          <img src="/icons/chevron.down.svg" alt="logo" />
          {question}
          <span className="blockTitle"></span>
        </h4>
        <div className="solution">{answer}</div>
      </div>
    </div>
  );
}
