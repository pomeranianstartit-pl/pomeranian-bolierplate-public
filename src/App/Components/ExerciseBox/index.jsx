import './styles.css';
import React, { useState } from 'react';
import { ToggleArrow } from '../Icons/ToggleArrow';

export const ExerciseBox = ({ task, snipCode, answer }) => {
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
    <div className="exercise-box">
      <h2 onClick={handleButtonOnClick} className={toggleArrow}>
        <ToggleArrow />
        {task}
      </h2>

      {isActive && <hr />}
      {isActive && (
        <div>
          <pre>
            <code>{snipCode}</code>
          </pre>
          <p>Wynik: {answer}</p>
        </div>
      )}
    </div>
  );
};
