import { useEffect, useState } from 'react';
import { Button } from '../Button/Button';
import { Menu } from '../Menu/Menu';
import './GameView.css';

export const GameView = ({ setGameStarted, time, amount, setAmount }) => {
  return (
    <>
      <Menu label="CZAS GRY">
        <Button isDisabled={true}>{time}</Button>
      </Menu>
      <Menu label="LICZBA RUCHÓW">
        <Button isDisabled={true}>{amount}</Button>
      </Menu>
      <Menu label="PRZYCISKI STERUJĄCE">
        <Button
          onClick={() => {
            setGameStarted(false);
            setAmount(0);
          }}
        >
          PASS
        </Button>
      </Menu>
    </>
  );
};
