import React, { useEffect, useState } from 'react';
import './styles.css';

const fields = [
  { id: 1, card: 'A', isHidden: true },
  { id: 2, card: 'B', isHidden: true },
  { id: 3, card: 'C', isHidden: true },
  { id: 4, card: 'D', isHidden: true },
  { id: 5, card: 'C', isHidden: true },
  { id: 6, card: 'A', isHidden: true },
  { id: 7, card: 'B', isHidden: true },
  { id: 8, card: 'D', isHidden: true },
];

function shuffleArray(arr) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled;
}

//
const initialTime = 120;

export const NemoGame = () => {
  const [gameFields, setGameFields] = useState(fields);
  const [time, setTime] = useState(initialTime);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [isGameEnded, setIsGameEnded] = useState(false);
  const [selectedCards, setSelectedCards] = useState([]);

  const handleStartGame = () => {
    setGameFields(shuffleArray([...fields, ...fields]));
    setIsGameEnded(false);
    setTime(initialTime);
    setScore(2);
    setIsGameStarted(true);
  };

  const handleClickField = (clickedField) => {
    if (selectedCards.length >= 2) {
      // Jeśli są już dwie odkryte karty, zignoruj kliknięcie
      return;
    }

    const updatedFields = gameFields.map((field) => {
      if (field.id === clickedField.id) {
        return {
          ...field,
          isHidden: false,
        };
      }
      return field;
    });

    setGameFields(updatedFields);
    setSelectedCards([...selectedCards, clickedField]);

    if (selectedCards.length === 1) {
      // Po kliknięciu w drugą kartę, sprawdź, czy pasują do siebie
      if (selectedCards[0].card === clickedField.card) {
        // Karty pasują, zwiększ wynik i zaktualizuj stan kafli
        setScore(score + 1);
        setSelectedCards([]);
      } else {
        // Karty nie pasują, zwróć kafle do stanu ukrytego po krótkim opóźnieniu
        setTimeout(() => {
          const resetFields = gameFields.map((field) => {
            if (field.isHidden === false) {
              return {
                ...field,
                isHidden: true,
              };
            }
            return field;
          });

          setGameFields(resetFields);
          setSelectedCards([]);
        }, 1000);
      }
    }
  };

  const handleStopGame = () => {
    setIsGameStarted(false);
    setIsGameEnded(true);
  };

  useEffect(() => {
    if (isGameStarted) {
      if (time > 0) {
        const intervalId = setInterval(() => {
          setTime(time - 1);
        }, 1000);

        return () => clearInterval(intervalId);
      } else {
        // Czas gry się skończył, zakończ grę
        handleStopGame();
      }
    }
  }, [time, isGameStarted]);

  return (
    <div className="nemo-game">
      <h2>
        Gra polegająca na zapamiętywaniu odkrytych kafli i łączeniu ich w pary
      </h2>

      {isGameStarted ? (
        <div>
          <div>
            <div className="option-wrapper">
              <div className="title">CZAS GRY</div>
              <div className="content">
                <button disabled={true}>{time}</button>
              </div>
            </div>

            <div className="option-wrapper">
              <div className="title">LICZBA RUCHÓW</div>
              <div className="content">
                <button disabled={true}>{score}</button>
              </div>
            </div>

            <div className="option-wrapper">
              <div className="title">PRZYCISKI STERUJĄCE</div>
              <div className="content">
                <button className="stop" onClick={handleStopGame}>
                  PASS
                </button>
              </div>
            </div>
          </div>

          <div className="board">
            {gameFields.map((field) => {
              return (
                <div
                  key={field.id}
                  onClick={() => handleClickField(field)}
                  className={`field ${field.isHidden ? 'hidden' : ''}`}
                >
                  {field.isHidden ? (
                    <div className="field-hidden">{field.id}</div>
                  ) : (
                    field.card
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="nemo-game">
          {isGameEnded && (
            <div className="game-over">
              Gratulacje! Twój wynik to {score} w czasie {initialTime - time}{' '}
              sekund!
            </div>
          )}

          <div className="option-wrapper">
            <div className="title">LICZBA ELEMENTÓW</div>
            <div className="content">
              <button className="current" onClick={() => setGameFields(fields)}>
                8 elementów
              </button>
              <button className="x" onClick={() => setGameFields(fields)}>
                16 elementów
              </button>
              <button className="x" onClick={() => setGameFields(fields)}>
                20 elementów
              </button>
            </div>
          </div>

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
