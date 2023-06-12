import React from 'react';

import './style.css';

export function ReactRouterEvents() {
  return (
    <div className='form--container'>
      <div className='header1'>
        <h1>Cześć !</h1>
      </div>
      <div className='label'>
        <label for="tekst-input">Wpisz tekst</label>
      </div>
      <div className='input-field'>
        <input type="text" id="tekst-" name="tekst-input" placeholder='tekst do wpisania' />
      </div>
      <div className='button'>
        <input type="button" value="KLIKNIJ" />
      </div>
    </div>
  );
}
