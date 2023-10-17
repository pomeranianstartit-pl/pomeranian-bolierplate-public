import { useEffect, useState } from 'react';

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
  const [previousMoleFieldId, setPreviousMoleFieldId] = useState([]);

  const [initialTime, setInitialTime] = useState(game_time);

  const [time, setTime] = useState(game_time);

  const [isGameStarted, setIsGameStarted] = useState(false);

  const [score, setScore] = useState(0);

  const [intervalId, setIntervalId] = useState(null);

  const [isGameEnded, setIsGameEnded] = useState(false);

  const [numMoles, setNumMoles] = useState(1);

  const handleStartGame = () => {
    //Wyzerowanie stanu gry
    setIsGameEnded(false);
    setTime(initialTime);
    setScore(0);
    //Losowanie nowej pozycji
    setMoleFieldId(getRandomMoleFields(numMoles));

    setIsGameStarted(true);

    const intervalId = setInterval(() => {
      setMoleFieldId(getRandomMoleFields(numMoles));
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

    if (isMolePresent) {
      //Losujemy nową pozycję
      setPreviousMoleFieldId(moleFieldId);
      setMoleFieldId(getRandomMoleFields(numMoles));
      //Resetujemy interwał
      clearInterval(intervalId);
      const newIntervalId = setInterval(() => {
        setMoleFieldId(getRandomMoleFields(numMoles));
      }, interval_time);
      setIntervalId(newIntervalId);
    }
  };
  //Do mierzenia czasu interwał
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
    <div>
      <h2>
        Gra polegająca na podążaniu za krecikiem i trafieniu na kwadrat, w
        którym się pojawił.
      </h2>

      {isGameStarted ? (
        <div>
          <div className="allgrid">
            {/* CZAS do końca  */}

            <div className="allgrid1">
              <div className="title">Czas do końca</div>

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

          {/* WIDOK ŁAPANIA KRETA */}

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
              Gratulacje, zdobyłeś {score} punktów
            </div>
          )}
          {/* CZAS gry */}

          <div className="allgrid1">
            <div className="title">Czas gry</div>

            <div className="content">
              <button
                onClick={() => setInitialTime(60)}
                className={initialTime === 60 ? 'current' : ''}
              >
                1 minuta
              </button>
              <button
                onClick={() => setInitialTime(120)}
                className={initialTime === 120 ? 'current' : ''}
              >
                2 minuty
              </button>
              <button
                onClick={() => setInitialTime(180)}
                className={initialTime === 180 ? 'current' : ''}
              >
                3 minuty
              </button>
            </div>
          </div>

          {/* LICZBA KRETÓW */}

          <div className="allgrid2">
            <div className="title">Liczba kretów</div>

            <div className="content">
              <button
                onClick={() => setNumMoles(1)}
                className={numMoles === 1 ? 'current' : ''}
              >
                1 kret
              </button>
              <button
                onClick={() => setNumMoles(2)}
                className={numMoles === 2 ? 'current' : ''}
              >
                2 krety
              </button>
              <button
                onClick={() => setNumMoles(3)}
                className={numMoles === 3 ? 'current' : ''}
              >
                3 krety
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
