
import React, { useState } from 'react';

import './style.css';
import { isVisible } from '@testing-library/user-event/dist/utils';

export function Exercise2() {
  const [isVisible, setVisibility] = useState(false);
  const buttonLabel = isVisible ? 'Hide' : 'Show';
  const handleClick = () => {
    setVisibility(!isVisible);
  };
  return (
    <div className="exercise-2">
      <p>See or not</p>
      {/* {isVisible && <p>tajny tekst</p>}*/}

      <p>
        <button onClick={handleClick}>{buttonLabel}</button>
      </p>

      {isVisible ? (
        <h2>isVisible jest na True</h2>
      ) : (
        <h2>isVisible jest na False</h2>
      )}

      {isVisible && <h2>tajny text</h2>}
    </div>
  );
}
