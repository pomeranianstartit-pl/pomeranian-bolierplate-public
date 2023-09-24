import { useState } from 'react';
import './style.css';

export function generateRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

// eksportuje sie funkcje zeby byla ona dostepna w innych miejsach
export function ReactGuessNumber() {
  const [losowa, setLosowa] = useState(generateRandomNumber());
  const [wynik, setWynik] = useState('Wcisnij start aby sprawdzic zgodnosc');
  const [liczba, setLiczba] = useState(null);

  console.log(losowa, 'to jest losowa liczba');

  function handleChange(event) {
    setLiczba(event.target.value);
  }

  function handleReset() {
    setLosowa(generateRandomNumber());
    console.log(losowa, 'to jest losowa liczba');
  }

  function checkNumber() {
    if (liczba == losowa) {
      setWynik('Gratulacje, trafiony!');
    } else if (liczba > losowa) {
      setWynik('Jestem mniejsza');
    } else {
      setWynik('Jestem wieksza');
    }
  }

  return (
    <div>
      <h3>React - apka do zgadywania liczby ZAWARTOSC STRONY</h3>

      {/* -------------------------------------------------------------------------- */}
      <h1>Jaka jestem liczba?</h1>

      <button onClick={checkNumber}>start</button>
      <p>
        <input
          type="number"
          placeholder="wpisz dowolna liczbe"
          value={liczba}
          onChange={handleChange}
        />
      </p>

      <button onClick={handleReset}>reset</button>

      <p>{wynik}</p>
    </div>
  );
}
