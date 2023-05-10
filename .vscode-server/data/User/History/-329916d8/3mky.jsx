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
      <p>
        Odpowiedź: {text1} jest większe od {text2}
      </p>
    </div>
  );
}
