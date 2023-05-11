import React, { useState } from 'react';
import './styles.css';

export const FaqSection = ({ question, answer }) => {
  return (
    <div className="faq-section">
      <div className="question">{question}</div>
      <div className="answer">{answer}</div>
    </div>
  );
};

export default FaqSection;
