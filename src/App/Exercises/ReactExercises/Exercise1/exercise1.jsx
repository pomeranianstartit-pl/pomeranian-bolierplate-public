import React from 'react';

import './style.css';

export function Exercise1() {
  const [text, setText] = React.useState('Placeholder');

  function handleSubmit(event) {
    event.preventDefault();
    console.log('Wysłano formularz');

    const tekst = event.target[0].value;
    console.log('wartość pola tekst: ', tekst);
    console.log(event);

    setText(tekst);
  }

  function handleOnChange(event) {
    console.log('Zmieniono wartoć pola tekst');
    console.log(event);

    const tekst = event.target.value;
    setText(tekst);
  }
  return (
    <div>
      <h2>Cześć</h2>

      <div className="columns">
        <form onSubmit={handleSubmit}>
          <label>Wpisz tekst</label>
          <input
            id="tekst"
            type="text"
            placeholder="tekst do wpisania"
            onChange={handleOnChange}
          />

          <button type="submit">Kliknij</button>
        </form>
        <p>{text}</p>
      </div>
    </div>
  );
}
