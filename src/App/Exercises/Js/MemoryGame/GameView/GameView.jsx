import { Button } from '../Button/Button';
import { Menu } from '../Menu/Menu';
import './GameView.css';

export const GameView = ({ setGameStarted }) => {
  return (
    <>
      <Menu label="czas gry">
        <Button isDisabled={true}>1:35</Button>
      </Menu>
      <Menu label="liczba ruchów">
        <Button isDisabled={true}>2</Button>
      </Menu>
      <Menu label="przyciski sterujące">
        <Button onClick={() => setGameStarted(false)}>PASS</Button>
      </Menu>
    </>
  );
};
