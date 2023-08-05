import './style.css';

export const SingleQuestion = ({ question, answer }) => {
  return (
    <div className="single-question">
      <h1>{question}</h1>
      <p>{answer}</p>
    </div>
  );
};
