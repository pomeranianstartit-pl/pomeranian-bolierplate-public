import React from 'react';

import './style.css';

export function Exercise2() {
  const isVisible = true;
  return <div>{isVisible && <p>Widać mnie!</p>}</div>;
}
