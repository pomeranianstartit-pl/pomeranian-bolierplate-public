import { useState } from 'react';

export function SingleQuestion({ answer, question }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
    console.log(isOpen);
  }

  console.log(isOpen);
  return (
    <div>
      <div className="questionBlock" onClick={handleClick}>
        <h4 className="questionHead">
          {isOpen ? (
            <img src="/icons/chevron.right.svg" alt="logo" />
          ) : (
            <img src="/icons/chevron.down.svg" alt="logo" />
          )}
          {question}
        </h4>
        {isOpen && <div className="solution">{answer}</div>}
      </div>
    </div>
  );
}
