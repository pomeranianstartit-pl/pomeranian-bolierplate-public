import './styles.css';

export const FAQSection = (props) => {
  return (
    <div className="faq-section">
      <div className="question">{props.question}</div>
      <div className="answer">{props.answer}</div>
    </div>
  );
};
