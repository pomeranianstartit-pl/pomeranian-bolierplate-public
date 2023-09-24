import { useState } from 'react';
import './style.css';

// eksportuje sie funkcje zeby byla ona dostepna w innych miejsach
export function ReactIfStatements() {
  const [clickedCount, setClickedCount] = useState(0);
  const [text, setText] = useState('Nie wykryto klikniecia przycisku');
  const [info, setInfo] = useState(null);

  function handleClickNumber(event) {
    // konstrukcja if ponizej
    // if () {}     <<    te 3 elementy zawsze sa potrzebne
    //  (warunek)   <<    gdy spelniony to wykona sie kod w wasach {}
    //

    const newClickedCount = clickedCount + 1;
    setClickedCount(newClickedCount);
    setText('Kliknales przycisk');
    console.log('kliknieto');

    if (newClickedCount > 5) {
      setInfo('Kliknales przycisk conajmniej 5 razy!');
    } else {
      setInfo('Kliknales przycisk mniej niz 5 razy!');
    }
  }

  return (
    <div>
      <h3>React - obsluga instrukcji if ZAWARTOSC STRONY</h3>

      {/* funkcja ponizej handleClickNumber jest bez nawiasow bo przekazuejmy referencje do niej */}
      <p></p>
      <button className="buttonFormat" onClick={handleClickNumber}>
        przycisk do tekst
      </button>

      <p>{text}</p>

      <p>Ilosc klikniec: {clickedCount}</p>

      <p id="idWarning">{info}</p>
    </div>
  );
}
