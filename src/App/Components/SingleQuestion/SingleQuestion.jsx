import React, { useState } from 'react';
import './styles.css';

export const FaqQuestions = (props) => {
  const { question, answer } = props;

  const [isQuestionClicked, setQuestionClicked] = useState(false);

  function clickAnswer() {
    setQuestionClicked(!isQuestionClicked);
  }

  return (
    <div className="border-open">
      <button className="question" onClick={clickAnswer}>
        {question}
      </button>
      <hr className="line" />
      {isQuestionClicked && <p className="answer">{answer}</p>}
    </div>
  );
};
