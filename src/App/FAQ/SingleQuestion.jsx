import { useState } from 'react';
import { ChevronDownIcon } from '../Components/Icons/ChevronDownIcon';

export function SingleQuestion({ question, answer }) {
  const [visible, setVisible] = useState(true);
  function onCliskHandle() {
    setVisible(!visible);
  }
  return (
    <section className="question-section" onClick={onCliskHandle}>
      <div className="question-icon">
        <ChevronDownIcon />
      </div>
      <h2 className="question-header">{question}</h2>
      {visible && (
        <div className="question-answer">
          <hr />
          <p>{answer}</p>
        </div>
      )}
    </section>
  );
}
