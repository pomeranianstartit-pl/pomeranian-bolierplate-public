import React from 'react';

import './style.css';
import { Form } from 'react-router-dom';

export function Cwiczenie1() {
  const [text, setText] = React.useState('Placeholder');
  function handleOnChange(event) {
    const text = event.target.value;
    setText(text);
  }

  return (
    <div className="columns">
      <h2>Cwiczenie 1 naglowek czesc</h2>

      <form>
        <label>Wpisz text</label>
        <input
          id="text"
          type="text"
          placeholder="text do wpisania"
          onChange={handleOnChange}
        ></input>
        <button type="submit">Kliknij mnie</button>
      </form>
      <p>{text}</p>
    </div>
  );
}
