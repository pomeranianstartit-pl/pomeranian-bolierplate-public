import React from 'react';

import './style.css';

export function Exercise2() {
  const isVisible = false;
  const text = isVisible ? 'Ukryj' : 'Pokaż';
  return (
    <div>
      <button
        onClick={() => {
          if (isVisible) {
            isVisible = false;
          } else {
            isVisible = true;
          }
        }}
      >
        {text}
      </button>
      {isVisible && <p>Widać mnie!</p>}
    </div>
  );
}
