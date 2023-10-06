import { useState } from 'react';

export function SingleQuestion({ answer, question }) {
  const [isOpen, setIsOpen] = useState(false);
  const [answerText, setAnswerText] = useState('');

  function handleClick() {
    setIsOpen(!isOpen);
    console.log(isOpen);
    changeText();
  }

  function changeText() {
    if (isOpen) {
      setAnswerText(answer);
    } else {
      setAnswerText('');
    }
  }

  return (
    <div>
      <div className="questionBlock" onClick={handleClick}>
        <h4 className="questionHead">
          <img src="/icons/chevron.down.svg" alt="logo" />
          {question}
          <span className="blockTitle"></span>
        </h4>
        <div className="solution">{answerText}</div>
      </div>
    </div>
  );
}
