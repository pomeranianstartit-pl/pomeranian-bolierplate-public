import './styles.css';
import React from 'react';

export const SingleQuestion = (props) => {
  const question = props.question;
  const answer = props.answer;

  return (
    <div className="box">
      <h2>{question}</h2>
      <hr />
      <p>{answer}</p>
    </div>
  );
};
