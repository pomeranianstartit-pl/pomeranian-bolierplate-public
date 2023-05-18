import React, { useState } from 'react';

const Faq = ({ question, answer }) => {
  const [visible, setVisible] = useState(false);

  const handleQuestionClick = () => {
    setVisible(!visible);
  };

  return (
    <div className="faq-container">
      <div
        className={`faq-question ${visible ? 'faq-question--expanded' : ''}`}
      >
        <div className="question-wrapper" onClick={handleQuestionClick}>
          <i className={visible ? 'arrow-down' : 'arrow-right'}></i>
          <h3 className="question-title">{question}</h3>
        </div>
        {visible && <p className="faq-answer">{answer}</p>}
      </div>
    </div>
  );
};

export default Faq;
