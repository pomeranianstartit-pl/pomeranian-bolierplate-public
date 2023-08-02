import { Button } from '../Button';
import { Menu } from '../Menu';

export const GameView = ({ setGameStarted }) => {
  return (
    <div className="htm-menu">
      <Menu label="Czas do końca">
        <Button>1:35</Button>
      </Menu>

      <Menu label="Wynik">
        <Button>16</Button>
      </Menu>

      <Menu label="Przyciski sterujące">
        <Button onClick={() => setGameStarted(false)}>Stop</Button>
      </Menu>
    </div>
  );
};
