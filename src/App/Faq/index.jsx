import './styles.css';
import React, { useState } from 'react';

export const Faq =() => {
  const [qaList, setQalist] = useState([
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
  ]);

  const [activeQuestion, setActiveQuestion] = useState(null);

  const handleQuestionClick = (index) => {
    setActiveQuestion((prevIndex) => (prevIndex === index ? null : index));
  };



  return (
    <div>
      <h2>FAQ</h2>
      <p className="qa-paragraph">Tutaj znajdź odpowiedzi na najczęściej zadawane pytania</p>
      <div className="faq-container">
        {qaList.map((qa, index) => (
          <div
            key={qa.question}
            className={`faq-question ${activeQuestion === index ? "faq-question--expanded" : ""
            }`}
          >
            <div className="question-wrapper" onClick={() => handleQuestionClick(index)}>
              <i className={activeQuestion === index ? "arrow-down" : "arrow-right"}></i>
              <h3 className="question-title">{qa.question}</h3>
            </div>
            {activeQuestion === index && <p className="faq-answer">{qa.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
          }  