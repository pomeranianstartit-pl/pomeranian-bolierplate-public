import { useState } from 'react';
import './styles.css';

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
    <div>
      {QUESTIONS.map((el) => (
        <QuestionComponent question={el.question} answer={el.answer} />
      ))}
    </div>
  );
}

const QuestionComponent = ({ question, answer }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div className="content">
      <h1 className="question" onClick={handleClick}>
        {question}
      </h1>
      {isVisible && (
        <div className="answer">
          <hr/>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};
