import React from 'react';

import './style.css';

export function ReactRouterEvents() {
  return (
    <div className="form--container">
      <h1>Cześć!</h1>

      <label for="lname">Wpisz tekst</label>
      <input
        type="text"
        id="textInput"
        name="textInput"
        placeholder="tekst do wpisania"
      />

      <input type="button" value="Submit" />
    </div>
  );
}
