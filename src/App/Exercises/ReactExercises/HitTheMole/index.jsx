import { useEffect, useState } from 'react';

import { NavLink } from 'react-router-dom';

import molepng from '../../../Images/mole.svg';

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

const interval_time = 1000;

const game_time = 60;

export const HitTheMole = () => {
  const [gameFields, setGameFields] = useState(fields);

  const [moleFieldId, setMoleFieldId] = useState(getRandomInt(10));

  const [initialTime, setInitialTime] = useState(game_time);

  const [time, setTime] = useState(game_time);

  const [isGameStarted, setIsGameStarted] = useState(false);

  const [isGameEnded, setIsGameEnded] = useState(false);

  const [previousMoleFieldId, setPreviousMoleFieldId] = useState(null);

  const [score, setScore] = useState(0);

  const [intervalId, setIntervalId] = useState(null);

  const handleStartGame = () => {
    setIsGameStarted(true);

    setMoleFieldId(getRandomInt(10));

    const intervalId = setInterval(() => {
      setMoleFieldId(getRandomInt(10));
    }, interval_time);

    setIntervalId(intervalId);

    setScore(0);
    setTime(game_time);
  };

  const handleStopGame = () => {
    setIsGameStarted(false);

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
      setPreviousMoleFieldId(moleFieldId);
      setMoleFieldId(getRandomInt(10));

      clearInterval(intervalId);
      const newIntervalId = setInterval(() => {
        setMoleFieldId(getRandomInt(10));
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
    <div className="wrapper">
      <NavLink to="/exercise" className="backBtn">
        {'<'}Kret
      </NavLink>
      <h2 className="mole">
        Gra polegająca na podążaniu za krecikiem i trafieniu na kwadrat, w
        którym się pojawił.
      </h2>

      {isGameStarted ? (
        <div>
          <div className="container_table">
            {/* CZAS do końca  */}

            <div className="container_row">
              <div className="title_mole">Czas do końca</div>

              <div className="content">
                <button disabled={true} className="button_mole score">
                  {time}
                </button>
              </div>
            </div>

            {/* WYNIK */}

            <div className="container_row">
              <div className="title_mole">Wynik</div>

              <div className="content">
                <button disabled={true} className="button_mole score">
                  {score}
                </button>
              </div>
            </div>

            {/* PRZYCISKI STERUJĄCE */}

            <div className="container_row">
              <div className="title_mole">Przyciski sterujące</div>

              <div className="content">
                <button onClick={handleStopGame} className="button_mole stop">
                  Stop
                </button>
              </div>
            </div>
          </div>

          {/* WIDOK ŁAPANIA KRETA */}

          <div className="game_field">
            {gameFields.map((field) => {
              const isMolePresent = field.id === moleFieldId;

              const isPreviousMolePresent = field.id === previousMoleFieldId;
              const isClickedWithMole =
                isPreviousMolePresent && field.hasClicked ? 'green' : '';

              const isClickedWithoutMole =
                !isPreviousMolePresent && field.hasClicked ? 'red' : '';

              return (
                <div
                  onClick={() => handleClickField(field, isMolePresent)}
                  className={`field ${isClickedWithMole} ${isClickedWithoutMole}`}
                >
                  {isMolePresent && <img src={molepng} alt="mole" />}
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="container_table">
          {/* CZAS gry */}

          <div className="container_row">
            <div className="title_mole">Czas gry</div>

            <div className="content">
              <button className="button_mole">1 minuta</button>
            </div>
          </div>

          {/* LICZBA KRETÓW */}

          <div className="container_row">
            <div className="title_mole">Liczba kretów</div>

            <div className="content">
              <button className="button_mole">1 kret</button>
            </div>
          </div>

          {/* PRZYCISKI STERUJĄCE */}

          <div className="container_row">
            <div className="title_mole">Przyciski sterujące</div>

            <div className="content">
              <button onClick={handleStartGame} className="button_mole start">
                Start
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
