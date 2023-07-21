import { useState } from 'react';
import './styles.css';
import { ArrowIcon } from '../Components/Icons/ArrowIcon';

export function FAQ() {
  const QUESTIONS = [
    {
      question: 'Jak mogę zapisać się na szkolenie?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero corrupti fuga ullam, nostrum odio aut.',
    },
    {
      question: 'Jak mogę zapisać się na szkolenie?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero corrupti fuga ullam, nostrum odio aut.',
    },
    {
      question: 'Jak mogę zapisać się na szkolenie?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero corrupti fuga ullam, nostrum odio aut.',
    },
    {
      question: 'Jak mogę zapisać się na szkolenie?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero corrupti fuga ullam, nostrum odio aut.',
    },
    {
      question: 'Jak mogę zapisać się na szkolenie?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero corrupti fuga ullam, nostrum odio aut.',
    },
  ];
  return (
    <div className="faq-section">
      {QUESTIONS.map((el) => (
        <QuestionComponent question={el.question} answer={el.answer} />
      ))}
    </div>
  );
}

const QuestionComponent = ({ question, answer }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [turnArrow, rotateArrow] = useState('');

  const handleClick = () => {
    setIsVisible(!isVisible);
    rotateArrow('turn-arrow-down');
  };
  return (
    <div className="content">
      <h1 className="question" onClick={handleClick}>
        <ArrowIcon />
        {question}
      </h1>
      {isVisible && (
        <div className="answer">
          <hr />
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};
