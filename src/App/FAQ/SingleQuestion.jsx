import { useState } from 'react';

export function SingleQuestion({ answer, question }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="entry">
      <ul className="ul-list">
        <li>{question}</li>
      </ul>
      <div className="text">{answer}</div>
    </div>
  );
}
