import React from 'react';

import './style.css';

export function Exercise4() {
  return (
    <div>
      <h1>Czy A jest większe od B?</h1>
      <label>A:</label>
      <input type="number" name="A" />
      <label>B:</label>
      <input type="number" name="B" />
    </div>
  );
}
