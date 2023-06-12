import React from 'react';

import './style.css';

export function ReactRouterEvents() {
  return (
    <div className='form--container'>

      <h1>Cześć !</h1>

      <label for="textInput"><b>Wpisz tekst:</b></label>
      <input type="text" id="textInput" name="textInput" placeholder="Tekst do wpisania" ></input>
      <input type="button" value="KLIKNIJ"></input>
    </div>
  );
}
