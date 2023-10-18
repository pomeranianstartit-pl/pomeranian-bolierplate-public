/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

import molesvg from '../../../Images/mole.svg';

import './styles.css';

const fields = [
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

const getRandomInt = (max) => Math.floor(Math.random() * max) + 1;

const getRandomMoleFields = (numMoles) => {
  const moleFields = [];

  while (moleFields.length < numMoles) {
    const randomField = getRandomInt(16);

    if (!moleFields.includes(randomField)) {
      moleFields.push(randomField);
    }
  }

  return moleFields;
};

const interval_time = 2000;
const game_time = 120;

export const MemoGame = () => {
  const [gameFields, setGameFields] = useState(fields);
  const [moleFieldId, setMoleFieldId] = useState(getRandomMoleFields(1));
  const [previusMoleFieldId, setPreviusMoleFieldId] = useState([]);
  const [initialTime, setInitialTime] = useState(game_time);
  const [time, setTime] = useState(game_time);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [isGameEnded, setIsGameEnded] = useState(false);
  const [numMoles, setNumMoles] = useState(1);

  const handleStartGame = () => {
    // 1. Tutaj zerujemy stan przed startem
    setIsGameEnded(false);
    setTime(initialTime);
    setScore(0);
    setMoleFieldId(getRandomMoleFields(numMoles));

    // 2. Zmiana widoku gry na pola z kretem
    setIsGameStarted(true);

    // 3. Zmiana miejsca kreta nawet jezeli uzytkownik nie kliknie
    const intervalId = setInterval(() => {
      setMoleFieldId(getRandomMoleFields(numMoles));
    }, interval_time);

    setIntervalId(intervalId);
  };

  const handleClickField = (clickedField, isMolePresent) => {
    // Ustawienie ktore pole zostalo klikniete
    setGameFields(
      gameFields.map((field) => {
        return {
          ...field,
          hasClicked: field.id === clickedField.id,
        };
      })
    );

    // Reset ktore pole zostalo klikniete + aktualizacja wyniku
    resetClickField();
    scoreUpdate(isMolePresent);

    // Losowanie nowego miejsca kreta jezeli zostanie trafiony
    if (isMolePresent) {
      // Ustawiamy mu nową pozycje i trzymamy info o jego poprzedniej pozycji
      setPreviusMoleFieldId(moleFieldId);
      setMoleFieldId(getRandomMoleFields(numMoles));

      // Reset interwału
      clearInterval(intervalId);
      const newIntervalId = setInterval(() => {
        setMoleFieldId(getRandomMoleFields(numMoles));
      }, interval_time);
      setIntervalId(newIntervalId);
    }
  };

  const resetClickField = () => {
    setTimeout(() => {
      setGameFields(fields);
    }, 300);
  };

  const scoreUpdate = (isMolePresent) => {
    if (isMolePresent) {
      setScore(score + 1);
    } else {
      setScore(score - 1);
    }
  };

  const handleStopGame = () => {
    setIsGameStarted(false);
    setIsGameEnded(true);

    clearInterval(intervalId);
  };

  // Do mierzenia czasu interwał i stopowania gry
  useEffect(() => {
    if (isGameStarted) {
      const intervalId = setInterval(() => {
        time > 0 ? setTime(time - 1) : handleStopGame();
      }, 2000);

      return () => clearInterval(intervalId);
    }
  }, [time, isGameStarted]);

  return (
    <div className="memo-game">
      <h2>
        Gra polegająca na zapamiętywaniu odkrytych kafli i łączeniu ich w pary
      </h2>

      {isGameStarted ? (
        <div>
          <div>
            {/* CZAS gry  */}
            <div className="option-wrapper">
              <div className="title">Czas gry</div>
              <div className="content">
                <button disabled={true}>{time}</button>
              </div>
            </div>

            {/* LICZBA RUCHÓW */}
            <div className="option-wrapper">
              <div className="title">Liczba ruchów</div>
              <div className="content">
                <button disabled={true}>{score}</button>
              </div>
            </div>

            {/* PRZYCISKI STERUJĄCE */}
            <div className="option-wrapper">
              <div className="title">Przyciski sterujące</div>
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
              const isMolePresent = moleFieldId.includes(field.id);

              const isPreviusMolePresent = previusMoleFieldId.includes(
                field.id
              );
              const isClickedWithMole =
                isPreviusMolePresent && field.hasClicked ? 'green' : '';
              const isClickedWithoutMole =
                !isPreviusMolePresent && field.hasClicked ? 'red' : '';

              return (
                <div
                  key={field.id}
                  onClick={() => handleClickField(field, isMolePresent)}
                  className={`field ${isClickedWithMole} ${isClickedWithoutMole}`}
                >
                  {isMolePresent && <img src={molesvg} alt="mole" />}
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="memo-game">
          {isGameEnded && (
            <div className="game-over">
              Gratulacje! Twój wynik to {score} w czasie !
            </div>
          )}

          {/* LICZBA KRETÓW */}
          <div className="option-wrapper">
            <div className="title">Liczba elementów</div>
            <div className="content">
              <button
                className={numMoles === 8 ? 'current' : ''}
                onClick={() => setNumMoles(8)}
                // onClick={() => setInitialTime(120)}
              >
                8 elementów
              </button>
              <button
                className={numMoles === 16 ? 'current' : ''}
                onClick={() => setNumMoles(16)}
              >
                16 elementów
              </button>
              <button
                className={numMoles === 20 ? 'current' : ''}
                onClick={() => setNumMoles(20)}
              >
                20 elementów
              </button>
            </div>
          </div>

          {/* PRZYCISKI STERUJĄCE */}
          <div className="option-wrapper">
            <div className="title">Przyciski sterujące</div>
            <div className="content">
              <button onClick={handleStartGame}>START</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
