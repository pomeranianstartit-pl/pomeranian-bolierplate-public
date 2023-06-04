import './Menu.css';
import { Menu } from '../Menu/Menu';
import { Button } from '../Button/Button';
import { SelectButtons } from '../SelectButtons/SelectButtons';
import { useState } from 'react';
import { Result } from '../Result/Result';

export const MenuView = ({
  isGameStarted,
  setGameStarted,
  setTime,
  setScore,
  score,
  initialTime,
  time,
  setInitialTime,
}) => {
  return (
    <>
      {time === 0 && <Result score={score} initialTime={initialTime} />}
      <Menu label="Czas gry">
        <SelectButtons
          setOptionChosen={setTime}
          setInitialTime={setInitialTime}
          options={[
            {
              label: 'Debugowanie',
              isActive: false,
              value: 0.1,
            },
            {
              label: '1 minuta',
              isActive: false,
              value: 1,
            },
            {
              label: '2 minuty',
              isActive: false,
              value: 2,
            },
            {
              label: '3 minuty',
              isActive: false,
              value: 3,
            },
          ]}
        />
      </Menu>
      <Menu label="Liczba kretów">
        <SelectButtons
          setOptionChosen={() => {}}
          options={[
            {
              label: '1 kret',
              isActive: false,
              value: 1,
            },
            {
              label: '2 krety',
              isActive: false,
              value: 2,
            },
            {
              label: '3 krety',
              isActive: false,
              value: 3,
            },
          ]}
        />
      </Menu>
      <Menu label="Przyciski sterujące">
        <Button onClick={() => setGameStarted(true)}>Start</Button>
      </Menu>
      {/* {!isGameStarted ? (
        <Result
          setOptionChosen={setTime}
          score={score}
          initialTime={initialTime}
        /> */}
      {/* ) : ( 'Rozpocznij grę i sprawdź, jaki wynik osiągniesz' )} */}
    </>
  );
};
