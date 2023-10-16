import { React, useState, useEffect } from 'react';
import './styles.css';

import molesvg from '../../../Images/Mole.svg';

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

  const [previusMoleFieldId, setPreviusMoleFieldId] = useState(null);
  const [initialTime, setInitialTime] = useState(game_time);
  const [time, setTime] = useState(game_time);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isGameEnded, setIsGameEnded] = useState(false);
  const [score, setScore] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const handleStartGame = () => {

    // 1. tutaj chcemy wyzerowac stan gry
    setIsGameEnded(false);
    setTime(game_time);
    setScore(0);

    // 3. na starcie gry te powinien pojawiac sie w nowym miejscu
    setMoleFieldId(getRandomInt(10));

    setIsGameStarted(true);

    const intervalId = setInterval(() => {
      setMoleFieldId(getRandomInt(10));
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

    // 2. po kliknieciu w kreta kret pojawia sie w innym losowym miejscu
    if (isMolePresent) {
      //losujemy mu nową pozycję
      setPreviusMoleFieldId(moleFieldId);
      setMoleFieldId(getRandomInt(10));

      // i resetujemy interwał
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
    console.log(time, 'time na kadej zmianie');
  });

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


      {isGameEnded && (
        <div className="congratulations">
          <h3>Gratulację! Twój wynik to: {score}</h3>
        </div>
      )}

      {isGameStarted ? (
        <div>
          <div className="menuPanel">
            {/* CZAS do końca  */}

            <div className="gameTime">
              <div className="title">Czas do końca</div>

              <div className="content">
                <button disabled={true}>{time}</button>
              </div>
            </div>

            {/* WYNIK */}

            <div className="gameScore">
     
              <div className="title">Wynik</div>

              <div className="content">
                <button disabled={true}>{score}</button>
              </div>
            </div>

            {/* PRZYCISKI STERUJĄCE */}


            <div className="gameStop">
              <div className="title">Przyciski sterujące</div>

              <div className="content">
                <button className="stop-button" onClick={handleStopGame}>
                  STOP
                </button>
              
              </div>
            </div>
          </div>

          {/* WIDOK ŁAPANIA KRETA */}


          <div className="gameFields">
            {gameFields.map((field) => {
              const isMolePresent = field.id === moleFieldId;

              const isPreviusMolePresent = field.id === previusMoleFieldId;
              const isClickedWithMole =
                isMolePresent && field.hasClicked ? 'green' : '';
              const isClickedWithoutMole =
                !isMolePresent && field.hasClicked ? 'red' : '';

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

        <div className="startMenuPanel">
          {/* CZAS gry */}

          <div className="startTime">
            <div className="title">Czas gry</div>

            <div className="content">
              <button>1 minuta</button>
            </div>

            <div className="content">
              <button>2 minuta</button>
            </div>

            <div className="content">
              <button>3 minuta</button>
            </div>
          </div>

          {/* LICZBA KRETÓW */}


          <div className="moleNumber">
            <div className="title">Liczba kretów</div>

            <div className="content">
              <button>1 kret</button>
            </div>


            <div className="content">
              <button>2 krety</button>
            </div>

            <div className="content">
              <button>3 krety</button>
            </div>
          </div>

          {/* PRZYCISKI STERUJĄCE */}


          <div className="gameStart">
            <div className="title">Przyciski sterujące</div>

            <div className="content">
              <button className="start-button" onClick={handleStartGame}>
                START
              </button>

            </div>
          </div>
        </div>
      )}
    </div>
  );
};
