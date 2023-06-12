import React from 'react';
import './style.css';

export function ReactRouterEvents() {
  return (
    <div name="form--container">
      <h1>Cześć!</h1>
      <label name="textInput" for="textInput">
        Wpisz tekst
      </label>
      <input
        id="textInput"
        type="text"
        name="textInput"
        placeholder="tekst do wpisania"
      />

      <input type="button" value="KLIKNIJ" />
    </div>
  );
}
