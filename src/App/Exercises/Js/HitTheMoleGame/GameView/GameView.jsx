import { Menu } from '../Menu/Menu';
import { Button } from '../Button/Button';
import { useEffect, useState } from 'react';
import './GameView.css';

export const GameView = ({ score, setGameStarted }) => {
  const [count, setCount] = useState(60);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      count > 0 && setCount(count - 1);
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [count]);

  return (
    <>
      <Menu label="Czas do końca">
        <div className="value-field">{count}</div>
      </Menu>
      <Menu label="Wynik">
        <div className="value-field">{score}</div>
      </Menu>
      <Menu label="Przyciski sterujące">
        <Button
          onClick={() => {
            setGameStarted(false);
          }}
        >
          STOP
        </Button>
      </Menu>
    </>
  );
};
