import './styles.css';
import React, { useState } from 'react';
import { ToggleArrow } from '../Icons/ToggleArrow';

export const SingleQuestion = ({ question, answer }) => {
  const [isActive, setIsActive] = useState(false);
  const [toggleArrow, setToggleArrow] = useState('toggle-arrow-side');
  function handleButtonOnClick(e) {
    setIsActive(!isActive);

    if (toggleArrow === 'toggle-arrow-side') {
      return setToggleArrow('');
    }
    return setToggleArrow('toggle-arrow-side');
  }
  return (
    <div className="faq-box">
      <h2 onClick={handleButtonOnClick} className={toggleArrow}>
        <ToggleArrow />
        {question}
      </h2>

      {isActive && <hr />}
      {isActive && <p>{answer}</p>}
    </div>
  );
};
