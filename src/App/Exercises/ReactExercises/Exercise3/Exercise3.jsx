import React, { useState } from 'react';

import './styles.css';

export function Exercise3() {
  const [isVisible, setVisibility] = useState(false);

  const buttonLabel = isVisible ? 'Hide' : 'Show';

  //const text = isVisible ? 'jest widoczny' : 'nie jest widoczny';

  const handleClick = () => {
    setVisibility(!isVisible);
  };
  return (
    <div className="exercise3">
      {/* {isVisible ? <p>true</p> : <b>false</b>} */}
      <p>
        <button onClick={handleClick}>Toggle Visibility</button>
      </p>
      {isVisible ? (
        <h2>isVisible jest na TRUE</h2>
      ) : (
        <h2>isVisible jest na FALSE</h2>
      )}
      <hr />
      {isVisible && <h2>tajny tekst</h2>}
    </div>
  );
}
