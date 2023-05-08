import React from 'react';

import './style.css';

export function Exercise2() {
  const isVisible = false;
  const text = isVisible ? 'Ukryj' : 'Pokaż';
  return (
    <div>
      <button
        onClick={() => {
          if (isVisible == false) {
            isVisible = true;
          } else if (isVisible == true) {
            isVisible = false;
          }
        }}
      >
        {text}
      </button>
      {isVisible && <p>Widać mnie!</p>}
    </div>
  );
}
