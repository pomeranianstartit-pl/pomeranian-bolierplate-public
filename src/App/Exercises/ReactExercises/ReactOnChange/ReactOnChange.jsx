import React from 'react';
import { useState } from 'react';
import './style.css';

// eksportuje sie funkcje zeby byla ona dostepna w innych miejsach
export function ReactOnChange() {
  const [text, setText] = useState('Twoje imie');
  const [number, setNumber] = useState(0);

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
      <button>
        Tekst
        <input
          type="text"
          placeholder="tekst przed wpisaniem"
          onChange={handleChangeText}
        />
      </button>

      <button>
        Liczba
        <input
          type="number"
          placeholder="imie przed wpisaniem"
          onChange={handleChangeNumber}
        />
      </button>

      <p>tutaj dodamy info ktory element zostal klikniety</p>
      <p>{text}</p>
      <p>{number}</p>
    </div>
  );
}
