import React from 'react';

import './style.css';

export function ReactRouterEvents() {
  return (
    <div className="form--container">
      <h1>Cześć!</h1>

      <label for="textInput">Wpisz tekst</label>
      <input type="text" id="textInput" name="textInput" placeholder="tekst" />

      <input type="button" value="KLIKNIJ" />
    </div>
  );
}
