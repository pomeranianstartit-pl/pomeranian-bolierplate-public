import React, { useEffect, useState } from 'react';
import './GameView.css';
import { Menu } from '../Menu/Menu';
import { Button } from '../Button/Button';

export const GameView = ({ setGameStarted, score, setScore, setTime, time}) => {
  const [counter, setCounter] = useState(60);
// useEffect odpowiedzialny za koniec gry
  useEffect(() => {
    if (counter === 0) {
      setGameStarted(false);
    }
  }, [counter]);

//  useEffect odpowiedzialny za czas
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (counter > 0) {
        setCounter(counter - 1);
      }
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [counter]);

 
  return (
    <>
      <Menu label="Czas do końca">
        <div className="value-field">{counter}</div>
      </Menu>
      <Menu label="Wynik">
        <div className="value-field">{score}</div>
      </Menu>
      <Menu label="Przyciski sterujące">
        <Button
          onClick={() => {
            setGameStarted(false);
            setCounter (0);
            setScore(0);
          }}
        >
          Stop
        </Button>
      </Menu>
    </>
  );
};