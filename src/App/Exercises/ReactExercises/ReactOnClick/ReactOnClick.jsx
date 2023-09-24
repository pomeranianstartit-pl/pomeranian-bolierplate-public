import React from 'react';
import { useState } from 'react';
import './style.css';

// eksportuje sie funkcje zeby byla ona dostepna w innych miejsach
export function ReactOnClick() {
  const [text, setText] = useState('Ktory przycisk zostal klikniety?');
  const [number, setNumber] = useState(0);

  function handleClick(event) {
    setText(event.target.innerHTML);
  }

  function handleClickNumber(event) {
    setNumber(event.target.innerHTML);
  }

  return (
    <div>
      <h3>React - obsluga zdarzenia onClick ZAWARTOSC STRONY</h3>

      {/* funkcja ponizej handleClick jest bez nawiasow bo przekazuejmy referencje do niej */}
      <button onClick={handleClick}>przycisk nr 1</button>
      <button onClick={handleClick}>przycisk nr 2</button>

      <button onClick={handleClickNumber}>10</button>
      <button onClick={handleClickNumber}>99</button>

      <p>tutaj dodamy info ktory element zostal klikniety</p>
      <p>{text}</p>
      <p>{number}</p>
    </div>
  );
}
