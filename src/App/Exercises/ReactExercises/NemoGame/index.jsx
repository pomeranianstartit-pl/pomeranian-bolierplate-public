/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

import './styles.css';

/* tabelka 8 pól */
const fields = [
  { id: 1, hasClicked: false },
  { id: 2, hasClicked: false },
  { id: 3, hasClicked: false },
  { id: 4, hasClicked: false },
  { id: 5, hasClicked: false },
  { id: 6, hasClicked: false },
  { id: 7, hasClicked: false },
  { id: 8, hasClicked: false },
];

const fields2 = [
  { id: 1, hasClicked: false },
  { id: 2, hasClicked: false },
  { id: 3, hasClicked: false },
  { id: 4, hasClicked: false },
  { id: 5, hasClicked: false },
  { id: 6, hasClicked: false },
  { id: 7, hasClicked: false },
  { id: 8, hasClicked: false },
  { id: 9, hasClicked: false },
  { id: 10, hasClicked: false },
  { id: 11, hasClicked: false },
  { id: 12, hasClicked: false },
  { id: 13, hasClicked: false },
  { id: 14, hasClicked: false },
  { id: 15, hasClicked: false },
  { id: 16, hasClicked: false },
];

const fields3 = [
  { id: 1, hasClicked: false },
  { id: 2, hasClicked: false },
  { id: 3, hasClicked: false },
  { id: 4, hasClicked: false },
  { id: 5, hasClicked: false },
  { id: 6, hasClicked: false },
  { id: 7, hasClicked: false },
  { id: 8, hasClicked: false },
  { id: 9, hasClicked: false },
  { id: 10, hasClicked: false },
  { id: 11, hasClicked: false },
  { id: 12, hasClicked: false },
  { id: 13, hasClicked: false },
  { id: 14, hasClicked: false },
  { id: 15, hasClicked: false },
  { id: 16, hasClicked: false },
  { id: 17, hasClicked: false },
  { id: 18, hasClicked: false },
  { id: 19, hasClicked: false },
  { id: 20, hasClicked: false },
];

function shuffleArray(s) {
  for (let i = s.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [s[i], s[j]] = [s[j], s[i]];
  }
  return s;
}

const interval_time = 1000;
const game_time = 120;

export const NemoGame = () => {
  // const [j, shuffleArray] = useState(elements, elements2, elements3);
  const [gameFields, setGameFields] = useState(fields);
  const [initialTime, setInitialTime] = useState(game_time);
  const [time, setTime] = useState(game_time);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [isGameEnded, setIsGameEnded] = useState(false);
  const [firstClick, setIsClicked] = useState(false);
  const [firstSecond, setIsClickedSecond] = useState(false);

  const handleStartGame = () => {
    // 1. Tutaj zerujemy stan przed startem
    setGameFields(shuffleArray(gameFields));
    setIsGameEnded(false);
    setTime(initialTime);
    setScore(0);
    // 2. Zmiana widoku gry na pola z kretem
    setIsGameStarted(true);
  };

  const handleClickField = (clickedField) => {
    // Ustawienie ktore pole zostalo klikniete
  };
  const handleStopGame = () => {
    setIsGameStarted(false);
    setIsGameEnded(true);
  };

  // Do mierzenia czasu interwał i stopowania gry
  useEffect(() => {
    if (isGameStarted) {
      const intervalId = setInterval(() => {
        time > 0 ? setTime(time - 1) : handleStopGame();
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [time, isGameStarted]);

  return (
    <div className="hit-the-mole">
      <h2>
        Gra polegająca na zapamiętywaniu odkrytych kafli i łączeniu ich w pary
      </h2>

      {isGameStarted ? (
        <div>
          <div>
            {/* CZAS do końca  */}
            <div className="option-wrapper">
              <div className="title">CZAS GRY</div>
              <div className="content">
                <button disabled={true}>{time}</button>
              </div>
            </div>

            {/* WYNIK */}
            <div className="option-wrapper">
              <div className="title">LICZBA RUCHÓW</div>
              <div className="content">
                <button disabled={true}>{score}</button>
              </div>
            </div>

            {/* PRZYCISKI STERUJĄCE */}
            <div className="option-wrapper">
              <div className="title">PRZYCISKI STERUJĄCE</div>
              <div className="content">
                <button className="stop" onClick={handleStopGame}>
                  PASS
                </button>
              </div>
            </div>
          </div>

          {/* WIDOK ŁAPANIA KRETA */}
          <div className="board">
            {gameFields.map((field) => {
              return (
                <div
                  key={field.id}
                  onClick={() => handleClickField(field)}
                  className={`field`}
                >
                  {field.id}
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="hit-the-mole">
          {isGameEnded && (
            <div className="game-over">
              Gratulację! Twój wynik to {score} w czasie {time}!
            </div>
          )}
          {/* CZAS gry */}
          <div className="option-wrapper">
            <div className="title">LICZBA ELEMENTÓW</div>
            <div className="content">
              <button className="current" onClick={() => setGameFields(fields)}>
                8 elementów
              </button>
              <button className="x" onClick={() => setGameFields(fields2)}>
                16 elementów
              </button>
              <button className="x" onClick={() => setGameFields(fields3)}>
                20 elementów
              </button>
            </div>
          </div>

          {/* PRZYCISKI STERUJĄCE */}
          <div className="option-wrapper">
            <div className="title">Przyciski sterujące</div>
            <div className="content">
              <button onClick={handleStartGame}>Start</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
