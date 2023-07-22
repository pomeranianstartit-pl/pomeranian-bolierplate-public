import { useState } from 'react';
import { ArrowIcon } from '../Components/Icons/ArrowIcon';

export function SingleQuestion({ question, answer }) {
  const [visible, setVisible] = useState(false);

  function onClickHandle() {
    setVisible(!visible);
    return visible;
  }

  return (
    <section className="question-section" onClick={onClickHandle}>
      <h2 className="question-header">
        <ArrowIcon className="faqIcon" />
        {question}
      </h2>

      {visible && (
        <div className="question-answer">
          <hr />
          <p>{answer}</p>
        </div>
      )}
    </section>
  );
}
