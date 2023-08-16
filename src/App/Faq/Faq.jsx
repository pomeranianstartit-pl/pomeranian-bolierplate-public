import { useState } from 'react';
import './styles.css';

const QUESTIONS = [
  {
    question: 'Jak moge się zapisać na szkolenie?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend rutrum ipsum, leo et in. Mattis porttitor volutpat placerat suspendisse ante in cursus etiam ullamcorper. Sollicitudin egestas aliquam, adipiscing adipiscing iaculis habitant. Viverra pretium tincidunt nisl pellentesque ut adipiscing non.Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    question: 'Jak moge się zapisać na szkolenie?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend rutrum ipsum, leo et in. Mattis porttitor volutpat placerat suspendisse ante in cursus etiam ullamcorper. Sollicitudin egestas aliquam, adipiscing adipiscing iaculis habitant. Viverra pretium tincidunt nisl pellentesque ut adipiscing non.Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    question: 'Jak moge się zapisać na szkolenie?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend rutrum ipsum, leo et in. Mattis porttitor volutpat placerat suspendisse ante in cursus etiam ullamcorper. Sollicitudin egestas aliquam, adipiscing adipiscing iaculis habitant. Viverra pretium tincidunt nisl pellentesque ut adipiscing non.Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    question: 'Jak moge się zapisać na szkolenie?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend rutrum ipsum, leo et in. Mattis porttitor volutpat placerat suspendisse ante in cursus etiam ullamcorper. Sollicitudin egestas aliquam, adipiscing adipiscing iaculis habitant. Viverra pretium tincidunt nisl pellentesque ut adipiscing non.Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    question: 'Jak moge się zapisać na szkolenie?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend rutrum ipsum, leo et in. Mattis porttitor volutpat placerat suspendisse ante in cursus etiam ullamcorper. Sollicitudin egestas aliquam, adipiscing adipiscing iaculis habitant. Viverra pretium tincidunt nisl pellentesque ut adipiscing non.Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
];
export function Faq() {
  return (
    <div>
      <div>
        <p>Tutaj znajdź odpowiedzi na najczęściej zadawane pytania</p>
      </div>

      <div>
        {QUESTIONS.map((el) => (
          <QuestionComponent question={el.question} answer={el.answer} />
        ))}
      </div>
    </div>
  );
}

const QuestionComponent = ({ question, answer }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="box">
      <h1 className="question" onClick={handleClick}>
        {question}
      </h1>
      <p className="answer">{isVisible && answer}</p>
    </div>
  );
};
