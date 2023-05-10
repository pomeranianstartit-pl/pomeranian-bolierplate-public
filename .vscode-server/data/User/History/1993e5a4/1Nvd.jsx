import React from 'react';

import './style.css';

export function Exercise2() {
  const isVisible = false;

  return (
    <div>
      <button>{text}</button>
      {isVisible && <p>Widać mnie!</p>}
    </div>
  );
}
