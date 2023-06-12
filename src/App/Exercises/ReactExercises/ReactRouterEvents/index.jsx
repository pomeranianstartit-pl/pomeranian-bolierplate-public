import React from 'react';

import './style.css';

export function ReactRouterEvents() {
  return (
    <div className="form--container">
      <h1>Cześć!</h1>

      <label for="text-input">Wpisz tekst:</label>
      <input
        type="text"
        id="text-input"
        name="text-input"
        placeholder="wpisz wartość"
      />

      <input type="button" value="KLIKNIJ" />
    </div>
  );
}
