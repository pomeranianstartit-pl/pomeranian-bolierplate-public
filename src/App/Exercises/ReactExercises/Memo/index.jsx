import React, { useEffect, useState } from 'react';
import './styles.css';
// const ascii0 = 48;
// const ascii9 = 57;
// const asciia = 65;
// const asciiz = 90;

export function createStage() {
  return [
    { character: 'A' },
    { character: 'B' },
    { character: 'C' },
    { character: 'D' },
    { character: 'E' },
    { character: 'F' },
    { character: 'G' },
    { character: 'H' },
    { character: 'A' },
    { character: 'B' },
    { character: 'C' },
    { character: 'D' },
    { character: 'E' },
    { character: 'F' },
    { character: 'G' },
    { character: 'H' },
  ].map((el, i) => ({ ...el, id: i, isGuessed: false, isVisible: false }));
}

function shuffleArray(s) {
  for (let i = s.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [s[i], s[j]] = [s[j], s[i]];
  }
  return s;
}

export const Memo = () => {
  const [time, setTime] = useState(0);
  const [playAmounts, setPlayAmounts] = useState(0);
  const [firstElementClicked, setFirstElementClicked] = useState(null);
  const [secondElementClicked, setSecondElementClicked] = useState(null);
  const [stage, setStage] = useState([]);
  const [isStarted, setGameState] = useState(false);

  function startGame() {
    setStage(shuffleArray(createStage()));
    setGameState(true);
  }

  function stopGame() {
    setGameState(false);
    setFirstElementClicked(null);
    setSecondElementClicked(null);
    setPlayAmounts(0);
    setTime(0);
    setStage([]);
  }

  useEffect(() => {
    const firstElement = stage.find((el) => el.id === firstElementClicked);

    const secondElement = stage.find((el) => el.id === secondElementClicked);

    const wasGuessed =
      firstElement?.id !== secondElement?.id &&
      firstElement?.character === secondElement?.character;

    const newStage = stage.map((el) => {
      if (el.id === firstElementClicked || el.id === secondElementClicked) {
        return {
          ...el,
          isVisible: true,
          isGuessed: el.isGuessed || wasGuessed,
        };
      } else {
        return {
          ...el,
          isVisible: false,
        };
      }
    });

    setStage(newStage);
  }, [firstElementClicked, secondElementClicked]);

  function checkElementClicked(el) {
    if (el.id === firstElementClicked || el.isGuessed) {
      return;
    }

    if (!firstElementClicked) {
      setFirstElementClicked(el.id);
      return;
    }

    if (!secondElementClicked) {
      setSecondElementClicked(el.id);
      return;
    }

    setSecondElementClicked(null);
    setFirstElementClicked(el.id);
    setPlayAmounts(playAmounts + 1);
  }

  function clickOnElement(id) {
    checkElementClicked(id);
  }

  function classOfElement(el) {
    const classes = ['cell'];
    if (el.isGuessed) {
      classes.push('guessed');
    }

    if (!el.isVisible && !el.isGuessed) {
      classes.push('closed');
    }

    return classes.join(' ');
  }

  return (
    <div>
      <div class="menu">
        <div class="menu-text">czas gry</div>
        <div class="menu-greyed">{time}</div>
        <div class="menu-text">liczba ruchów</div>
        <div class="menu-greyed">{playAmounts}</div>
        <div class="menu-text">Przyciski sterujące</div>
        {isStarted && <button onClick={stopGame}>Stop</button>}
        {!isStarted && <button onClick={startGame}>Start</button>}
      </div>

      <div className="stage">
        {isStarted &&
          stage.map((el) => {
            return (
              <div
                key={el.id}
                className={classOfElement(el)}
                onClick={() => clickOnElement(el)}
              >
                {(el.isGuessed || el.isVisible) && el.character}
              </div>
            );
          })}
      </div>
    </div>
  );
};
