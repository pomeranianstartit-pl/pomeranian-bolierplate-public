import { Menu } from '../Menu/Menu';
import './GameView';
import { Button } from '../Button/Button';

export const GameView = () => {
  return (
    <div>
      <Menu label="Czas gry">
        <Button isDisabled={true}>1:35</Button>
      </Menu>
      <Menu label="Liczba ruchów">
        <Button isDisabled={true}>2</Button>
      </Menu>
      <Menu label="Przyciski sterujące">
        <Button isControl={true}>PASS</Button>
      </Menu>
    </div>
  );
};
