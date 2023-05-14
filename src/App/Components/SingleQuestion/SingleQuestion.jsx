import React, { useState } from 'react';
import './styles.css';
import { Arrow } from '../Icons/Arrow';

export const FaqQuestions = (props) => {
  const { question, answer } = props;

  const [isQuestionClicked, setQuestionClicked] = useState(false);
  const [arrowDown, setArrowDown] = useState(false);

  // const ifArrow = ({ active, <Arrow/> }) => (
  //   <div className={`banner ${active ? "active" : "inactive"}`}>{}</div>
  // )

  function clickAnswer() {
    setQuestionClicked(!isQuestionClicked);
  }

  // function changeArrow() {
  //   if (setArrowDown(!arrowDown)) {
  //     <button className='activeArrow'><Arrow /></button>
  //   } else {
  //     <button className='inactiveArrow'><Arrow /></button>
  //   }
  // }

  return (
    <div className="border-open">
      <button className="inactiveArrow">
        <Arrow />
      </button>
      <button className="question" onClick={clickAnswer}>
        {question}
      </button>
      <hr className="line" />
      {isQuestionClicked && <p className="answer">{answer}</p>}
    </div>
  );
};
