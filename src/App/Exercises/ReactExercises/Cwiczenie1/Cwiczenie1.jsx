import React from 'react';

import './style.css';
import { Form } from 'react-router-dom';

export function Cwiczenie1() {
  const [text, setText] = React.useState('Placeholder');
  function handleSubmit(event) {
    event.preventDefault();

    console.log('Wysłano formularz');

    const tekst = event.target[0].value;

    console.log('Wartość pola tekst: ', tekst);

    console.log(event);
    setText(tekst);
  }

  return (
    <div className="columns">
      <h2>Cwiczenie 1 naglowek czesc</h2>

      <form onSubmit={handleSubmit}>
        <label>Wpisz text</label>
        <input id="text" type="text" placeholder="text do wpisania"></input>
        <button type="submit">Kliknij mnie</button>
      </form>
      <p>{text}</p>
    </div>
  );
}
