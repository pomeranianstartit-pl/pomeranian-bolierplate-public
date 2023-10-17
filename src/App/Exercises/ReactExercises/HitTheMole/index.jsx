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

const getRandomMolePositions = (numMoles) => {
  const positions = [];
  while (positions.length < numMoles) {
    const randomPosition = getRandomInt(10);
    if (!positions.includes(randomPosition)) {
      positions.push(randomPosition);
    }
  }
  return positions;
};

const interval_time = 1000;
const game_time = 60;

export const HitTheMole = () => {
  const [gameFields, setGameFields] = useState(fields);
  const [numMoles, setNumMoles] = useState(1);
  const [moleFieldIds, setMoleFieldIds] = useState(
    getRandomMolePositions(numMoles)
  );
  const [previusMoleFieldIds, setPreviusMoleFieldIds] = useState([]);
  const [time, setTime] = useState(game_time);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [isGameEnded, setIsGameEnded] = useState(false);
  const [initialTime, setInitialTime] = useState(game_time);

  const handleStartGame = () => {
    // 1. tutaj pewnie chcecie "wyzerować" stan gry
    setIsGameEnded(false);
    setTime(game_time);
    setScore(0);
    setMoleFieldIds(getRandomMolePositions(numMoles));

    setIsGameStarted(true);

    const intervalId = setInterval(() => {
      setMoleFieldIds(getRandomMolePositions(numMoles));
    }, interval_time);

    setIntervalId(intervalId);
  };

  const handleStopGame = () => {
    setIsGameStarted(false);
    setIsGameEnded(true);

    clearInterval(intervalId);
  };

  const resetClickField = () => {
    setTimeout(() => {
      setGameFields(
        gameFields.map((field) => {
          return {
            ...field,
            hasClicked: false,
          };
        })
      );
    }, 300);
  };

  const scoreUpdate = (isMolePresent) => {
    if (isMolePresent) {
      setScore(score + 1);
    } else {
      setScore(score - 1);
    }
  };

  const handleClickField = (clickedField, isMolePresent) => {
    setGameFields(
      gameFields.map((field) => {
        return {
          ...field,
          hasClicked: field.id === clickedField.id,
        };
      })
    );

    resetClickField();
    scoreUpdate(isMolePresent);

    // 2.po kliknięciu w kreta kret pojawia sie w innym losowym miejscu
    if (isMolePresent) {
      // losujemy mu nową pozycję
      setPreviusMoleFieldIds(moleFieldIds);
      setMoleFieldIds(getRandomMolePositions(numMoles));

      // i resetujemy interwał
      clearInterval(intervalId);
      const newIntervalId = setInterval(() => {
        setMoleFieldIds(getRandomMolePositions(numMoles));
      }, interval_time);
      setIntervalId(newIntervalId);
    }
  };

  useEffect(() => {
    if (isGameStarted) {
      const intervalId = setInterval(() => {
        time > 0 && setTime(time - 1);
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [time, isGameStarted]);

  useEffect(() => {
    if (time === 0) {
      handleStopGame();
    }
  }, [time]);

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
              const isMolePresent = moleFieldIds.includes(field.id);

              const isPreviusMolePresent = previusMoleFieldIds.includes(
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
              <button className="current">1 minuta</button>
              <button>2 minuty</button>
              <button>3 minuty</button>
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
