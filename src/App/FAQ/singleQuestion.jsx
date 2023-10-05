import { useState } from 'react';

export function SingleQuestion({ answer, question }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
    console.log(isOpen);
  }
  return (
    <div>
      <div className="questionBlock" onClick={handleClick}>
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
