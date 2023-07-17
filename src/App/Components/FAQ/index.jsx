import { useState } from 'react';
import './styles.css';

export function FAQ() {
  const QUESTIONS = [
    {
      question: 'Jak mogę zapisać się na szkolenie?',
      answer: 'Lorem ipsum',
    },
    {
      question: 'Jak nauczyć się programowania?',
      answer: 'Lorem ipsum',
    },
    {
      question: 'Jak zdać test?',
      answer: 'Lorem ipsum',
    },
    {
      question: 'Kiedy otrzymam certyfikat?',
      answer: 'Lorem ipsum',
    },
  ];
  return (
    <div>
      <p>Tutaj znajdź odpowiedzi na najczęściej zadawane pytania</p>
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
      <h2 onClick={handleClick}>{question}</h2>
      <p>{isVisible && answer}</p>
    </div>
  );
};
