import React, { useState } from 'react';
import './WelcomeView.css';

export const WelcomeView = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');

  function getInputValue(inputText) {
    setInputValue(inputText.target.value);
  }

  //Zliczanie liter wpisanych do inputa (bez spacji)--------

  const [charactersInput, setCharactersInput] = useState(0);

  function countChar() {
    setCharactersInput(inputValue.replaceAll(' ', '').length);
  }

  //.trim() obcina spacje i zwraca string bez przerwy miedzy wyrazami/liczbami
  //.length zwraca liczbe znakow

  return (
    <div className="welcomeview">
      <div className="welcomeview-inline-block">
        <div className="welcomeview-text">
          <h1>Cześć!</h1>
        </div>

        <div className="welcomeview-input">
          <label>Wpisz tekst</label>
        </div>

        <div className="welcomeview-input-box">
          <input
            type="text"
            name="welcomeview"
            placeholder="tekst do wpisania"
            onChange={(event) => getInputValue(event)}
          />
        </div>

        <div className="welcomeview-button">
          <button type="button" onClick={() => setCount(count + 1)}>
            <p>KLIKNIJ</p>
          </button>
          <button type="button" onClick={() => countChar()}>
            <p>OBLICZ</p>
          </button>
        </div>
      </div>
      <div className="welcomeview-inline-block">
        <div className="welcomeview-placeholder-box">
          <p>Naciśnięto przycisk {count} razy</p>
          <p>Wpisałeś tekst: {inputValue}</p>
          <p>Długość tekstu: {charactersInput}</p>
        </div>
      </div>
    </div>
  );
};
