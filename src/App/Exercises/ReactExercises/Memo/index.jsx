import { useEffect, useState } from 'react';
// import { Cards } from './data';
import molesvg from '../../../Images/Mole.svg';
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
  { id: 17, hasClicked: false },
  { id: 18, hasClicked: false },
  { id: 19, hasClicked: false },
  { id: 20, hasClicked: false },
];

const Cards = [
  { id: 1, card: '2' },
  { id: 1, card: '2' },
  { id: 2, card: 'K' },
  { id: 2, card: 'K' },
  { id: 3, card: 'A' },
  { id: 3, card: 'A' },
  { id: 4, card: 'U' },
  { id: 4, card: 'U' },
  { id: 5, card: 'R' },
  { id: 5, card: 'R' },
  { id: 6, card: '8' },
  { id: 6, card: '8' },
  { id: 7, card: '4' },
  { id: 7, card: '4' },
  { id: 8, card: 'Z' },
  { id: 8, card: 'Z' },
];
const getRandomInt = (max) => Math.floor(Math.random() * max) + 1;

const getRandomMoleFields = (numCards) => {
  const moleFields = [];

  while (moleFields.length < numCards) {
    const randomField = getRandomInt(10);

    if (!moleFields.includes(randomField)) {
      moleFields.push(randomField);
    }
  }

  return moleFields;
};

const interval_time = 1000;

const game_time = 0;

export const Memo = () => {
  const [gameFields, setGameFields] = useState(fields);

  const [moleFieldId, setMoleFieldId] = useState(getRandomMoleFields(1));
  const [previousMoleFieldId, setPreviousMoleFieldId] = useState([]);

  const [initialTime, setInitialTime] = useState(game_time);

  const [time, setTime] = useState(game_time);

  const [isGameStarted, setIsGameStarted] = useState(false);

  const [score, setScore] = useState(0);

  const [intervalId, setIntervalId] = useState(null);

  const [isGameEnded, setIsGameEnded] = useState(false);

  const [numCards, setNumCards] = useState(1);

  const [numFields, setNumFields] = useState(8);

  const handleStartGame = () => {
    //Wyzerowanie stanu gry
    setIsGameEnded(false);
    setTime(initialTime);
    setScore(0);
    //Losowanie nowej pozycji
    setMoleFieldId(getRandomMoleFields(numCards));

    setIsGameStarted(true);

    const intervalId = setInterval(() => {
      setMoleFieldId(getRandomMoleFields(numCards));
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

    if (isMolePresent) {
      //Losujemy nową pozycję
      setPreviousMoleFieldId(moleFieldId);
      setMoleFieldId(getRandomMoleFields(numCards));
      //Resetujemy interwał
      clearInterval(intervalId);
      const newIntervalId = setInterval(() => {
        setMoleFieldId(getRandomMoleFields(numCards));
      }, interval_time);
      setIntervalId(newIntervalId);
    }
  };
  //Do mierzenia czasu interwał
  useEffect(() => {
    if (isGameStarted) {
      const intervalId = setInterval(() => {
        time > -1 && setTime(time + 1);
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [time, isGameStarted]);

  useEffect(() => {
    if (time === 180) {
      handleStopGame();
    }
  }, [time]);

  return (
    <div>
      <h2>
        Gra polegająca na zapamiętywaniu odkrytych kafli i łączeniu ich w pary.
      </h2>

      {isGameStarted ? (
        <div>
          <div className="allgrid">
            {/* CZAS */}

            <div className="allgrid1">
              <div className="title">Czas gry</div>

              <div className="content">
                <button disabled={true}>{time}</button>
              </div>
            </div>

            {/* WYNIK */}

            <div className="allgrid2">
              <div className="title">Wynik</div>

              <div className="content">
                <button disabled={true}>{score}</button>
              </div>
            </div>

            {/* PRZYCISKI STERUJĄCE */}

            <div className="allgrid3">
              <div className="title">Przyciski sterujące</div>

              <div className="content1">
                <button onClick={handleStopGame}>
                  <p>STOP</p>
                </button>
              </div>
            </div>
          </div>

          {/* WIDOK ODKRYWANIA KART */}

          <div className="fieldgrid">
            {gameFields.map((field) => {
              const isMolePresent = moleFieldId.includes(field.id);

              const isPreviusMolePresent = previousMoleFieldId.includes(
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
        <div className="allgrid">
          {isGameEnded && (
            <div className="game-over">
              Gratulację! Twój wynik to {score} par w czasie ??????????!
            </div>
          )}

          {/* LICZBA ELEMENTÓW */}

          <div className="allgrid2">
            <div className="title">Liczba elementów</div>

            <div className="content">
              <button
                onClick={() => setNumFields(8)}
                className={numFields === 8 ? 'current' : ''}
              >
                8 elementów
              </button>
              <button
                onClick={() => setNumFields(16)}
                className={numFields === 16 ? 'current' : ''}
              >
                16 elementów
              </button>
              <button
                onClick={() => setNumFields(20)}
                className={numFields === 20 ? 'current' : ''}
              >
                20 elementów
              </button>
            </div>
          </div>

          {/* PRZYCISKI STERUJĄCE */}

          <div className="allgrid3">
            <div className="title">Przyciski sterujące</div>

            <div className="content1">
              <button onClick={handleStartGame}>
                <p>START</p>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
