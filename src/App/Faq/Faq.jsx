import { useState } from 'react';
import './styles.css';

export function Faq() {
  const QUESTIONS = [
    {
      question: 'Pytanie 1',
      answer: 'Lorem ipsum ....',
    },
    {
      question: 'Pytanie 2',
      answer: 'Lorem ipsum ....',
    },
    {
      question: 'Pytanie 3',
      answer: 'Lorem ipsum ....',
    },
    {
      question: 'Pytanie 4',
      answer: 'Lorem ipsum ....',
    },
    {
      question: 'Pytanie 5',
      answer: 'Lorem ipsum ....',
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
    <div>
      <h1 onClick={handleClick}>{question}</h1>
      <p>{isVisible && answer}</p>
    </div>
  );
};
