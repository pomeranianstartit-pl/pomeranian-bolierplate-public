import './styles.css';
import React, { useState } from 'react';
import FaqQuestion from './FaqQuestion';

export const Faq = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const handleQuestionClick = (index) => {
    setActiveQuestion((prevIndex) => (prevIndex === index ? null : index));
  };
  const qaList = [
    {
      question: 'Jak mogę zapisać się na szkolenie?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend rutrum ipsum, leo et in. Mattis porttitor volutpat placerat suspendisse ante in cursus etiam ullamcorper. Sollicitudin egestas aliquam, adipiscing adipiscing iaculis habitant. Viverra pretium tincidunt nisl pellentesque ut adipiscing non.Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      question: 'Jak mogę zapisać się na szkolenie?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend rutrum ipsum, leo et in. Mattis porttitor volutpat placerat suspendisse ante in cursus etiam ullamcorper. Sollicitudin egestas aliquam, adipiscing adipiscing iaculis habitant. Viverra pretium tincidunt nisl pellentesque ut adipiscing non.Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      question: 'Jak mogę zapisać się na szkolenie?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend rutrum ipsum, leo et in. Mattis porttitor volutpat placerat suspendisse ante in cursus etiam ullamcorper. Sollicitudin egestas aliquam, adipiscing adipiscing iaculis habitant. Viverra pretium tincidunt nisl pellentesque ut adipiscing non.Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      question: 'Jak mogę zapisać się na szkolenie?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend rutrum ipsum, leo et in. Mattis porttitor volutpat placerat suspendisse ante in cursus etiam ullamcorper. Sollicitudin egestas aliquam, adipiscing adipiscing iaculis habitant. Viverra pretium tincidunt nisl pellentesque ut adipiscing non.Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
  ];

  return (
    <div>
      <h2>FAQ</h2>
      <p className="qa-paragraph">Tutaj znajdź odpowiedzi na najczęściej zadawane pytania</p>
      <div className="faq-container">
        {qaList.map((qa, index) => (
          <FaqQuestion
            key={qa.question}
            question={qa.question}
            answer={qa.answer}
            isActive={activeQuestion === index}
            onClick={() => handleQuestionClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Faq;