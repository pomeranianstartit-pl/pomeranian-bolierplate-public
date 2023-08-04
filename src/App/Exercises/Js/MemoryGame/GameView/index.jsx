import { Button } from '../Button';
import { Menu } from '../Menu';
import { useEffect } from 'react';

export const GameView = () => {
  return (
    <div className="mg-menu">
      <Menu label="CZAS GRY">
        <Button>2:00</Button>
      </Menu>

      <Menu label="LICZBA RUCHÓW">
        <Button>2</Button>
      </Menu>

      <Menu label="PRZYCISKI STERUJĄCE">
        <Button>PASS</Button>
      </Menu>
    </div>
  );
};
