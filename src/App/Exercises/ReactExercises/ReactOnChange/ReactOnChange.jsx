import React from 'react';
import { useState } from 'react';
import './style.css';

// eksportuje sie funkcje zeby byla ona dostepna w innych miejsach
export function ReactOnChange() {
  const [name, setText] = useState(null);
  const [number, setNumber] = useState(null);

  function handleChangeText(event) {
    setText(event.target.value);
  }

  function handleChangeNumber(event) {
    setNumber(event.target.value);
  }

  return (
    <div>
      <h3>React - obsluga zdarzenia onChange ZAWARTOSC STRONY</h3>

      {/* funkcja ponizej handleChange jest bez nawiasow bo przekazuejmy referencje do niej */}
      <button className="buttonFormat">
        Tekst
        <input
          type="text"
          placeholder="tekst przed wpisaniem"
          value={name}
          onChange={handleChangeText}
        />
      </button>

      <button className="buttonFormat">
        Liczba
        <input
          type="number"
          placeholder="0"
          value={number}
          onChange={handleChangeNumber}
        />
      </button>

      <p>tutaj dodamy info ktory element zostal klikniety</p>
      <p>{name}</p>
      <p>{number}</p>
    </div>
  );
}
