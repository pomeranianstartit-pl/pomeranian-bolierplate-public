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
];

const getRandomInt = (max) => Math.floor(Math.random() * max) + 1;

const getRandomMoleFields = (numMoles) => {
  const moleFields = [];

  while (moleFields.length < numMoles) {
    const randomField = getRandomInt(10);

    if (!moleFields.includes(randomField)) {
      moleFields.push(randomField);
    }
  }

  return moleFields;
};

const interval_time = 1000;
const game_time = 60;

export const HitTheMole = () => {
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
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [time, isGameStarted]);

  return (
    <div className="hit-the-mole">
      <h2>
        Gra polegająca na podążaniu za krecikiem i trafieniu na kwadrat, w
        którym się pojawił.
      </h2>

      {isGameStarted ? (
        <div>
          <div>
            {/* CZAS do końca  */}
            <div className="option-wrapper">
              <div className="title">Czas do końca</div>
              <div className="content">
                <button disabled={true}>{time}</button>
              </div>
            </div>

            {/* WYNIK */}
            <div className="option-wrapper">
              <div className="title">Wynik</div>
              <div className="content">
                <button disabled={true}>{score}</button>
              </div>
            </div>

            {/* PRZYCISKI STERUJĄCE */}
            <div className="option-wrapper">
              <div className="title">Przyciski sterujące</div>
              <div className="content">
                <button className="stop" onClick={handleStopGame}>
                  Stop
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
        <div className="hit-the-mole">
          {isGameEnded && (
            <div className="game-over">
              Gratulacje, zdobyłeś {score} punktów
            </div>
          )}
          {/* CZAS gry */}
          <div className="option-wrapper">
            <div className="title">Czas gry</div>
            <div className="content">
              <button
                className={initialTime === 60 ? 'current' : ''}
                onClick={() => setInitialTime(60)}
              >
                1 minuta
              </button>
              <button
                className={initialTime === 120 ? 'current' : ''}
                onClick={() => setInitialTime(120)}
              >
                2 minuty
              </button>
              <button
                className={initialTime === 180 ? 'current' : ''}
                onClick={() => setInitialTime(180)}
              >
                3 minuty
              </button>
            </div>
          </div>

          {/* LICZBA KRETÓW */}
          <div className="option-wrapper">
            <div className="title">Liczba kretów</div>
            <div className="content">
              <button
                className={numMoles === 1 ? 'current' : ''}
                onClick={() => setNumMoles(1)}
              >
                1 kret
              </button>
              <button
                className={numMoles === 2 ? 'current' : ''}
                onClick={() => setNumMoles(2)}
              >
                2 krety
              </button>
              <button
                className={numMoles === 3 ? 'current' : ''}
                onClick={() => setNumMoles(3)}
              >
                3 krety
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