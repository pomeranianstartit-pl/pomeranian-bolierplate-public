import React, { useState } from 'react';
//import { ExpandIcon } from '../Icons/ExpandIcon';
import './styles.css';

export const FAQSection = (props) => {
  return (
    <div className="faq-section">
      <button>
        <img src="/src/App/Components/Icons/ExpandIcon.jsx" alt="rozwijanie" />
      </button>
      <div className="question">{props.question}</div>
      <div className="answer">{props.answer}</div>
    </div>
  );
};
