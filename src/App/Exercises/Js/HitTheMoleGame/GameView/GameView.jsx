import { Menu } from '../Menu/Menu';
import { Button } from '../Button/Button';

import { useEffect } from 'react';
import './GameView.css';

export const GameView = ({
  score,
  setGameStarted,
  setTime,
  time,
  setGameStopped,
}) => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      time > 0 && setTime(time - 1);
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [time]);

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
            setGameStarted(false);
            setGameStopped(true);
          }}
        >
          STOP
        </Button>
      </Menu>
    </>
  );
};
