import { Menu } from '../Menu/Menu';
import { Button } from '../Button/Button';

import { useEffect, useState } from 'react';
import './GameView.css';

export const GameView = ({
  score,
  setGameStarted,
  setScore,
  setTime,
  time,
}) => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      time > 0 && setTime(time - 1);
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [time]);

  // if (time == 0) {
  //   setGameStarted(false);
  // }

  return (
    <>
      <Menu label="Czas do końca">
        <div className="value-field">{time}</div>
      </Menu>
      <Menu label="Wynik">
        <div className="value-field">{score}</div>
      </Menu>
      <Menu label="Przyciski sterujące">
        <Button
          onClick={() => {
            setScore(0);
            setGameStarted(false);
          }}
        >
          STOP
        </Button>
      </Menu>
    </>
  );
};
