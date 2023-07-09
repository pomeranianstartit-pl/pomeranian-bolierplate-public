import React from 'react';

import './style.css';

export function Cwiczenie1() {
  const [text, setText] = React.useState('Placeholder');

  function handleSubmit(event) {
    event.preventDefault();
    console.log('Wysłano formularz');

    const text = event.target[0].value;
    console.log('Wartość pola tekst: ', text);
    console.log(event);

    setText(text);
  }

  function handleOnChange(event) {
    console.log('Zmieniono wartość pola tekst');
    console.log(event);
    const text = event.target.value;
    setText(text);
  }

  return (
    <div>
      <h2>Cześć</h2>
      <div className="columns">
        <form onSubmit={handleSubmit}>
          <label>Wpisz tekst</label>
          <input
            id="text "
            type="text"
            placeholder="tekst do wpisania"
            onChange={handleOnChange}
          />
          <button type="submit">KLIKNIJ</button>
        </form>

        <p>{text}</p>
      </div>
    </div>
  );
}
