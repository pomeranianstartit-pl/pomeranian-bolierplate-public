import { Button } from '../Button/Button';
import { Menu } from '../Menu/Menu';
import './GameView.css';

export const GameView = ({ setGameStarted }) => {
  return (
    <>
      <Menu label="CZAS GRY">
        <Button isDisabled={true}>CZAS</Button>
      </Menu>
      <Menu label="LICZBA RUCHÓW">
        <Button isDisabled={true}>LICZBA</Button>
      </Menu>
      <Menu label="PRZYCISKI STERUJĄCE">
        <Button onClick={() => setGameStarted(false)}>PASS</Button>
      </Menu>
    </>
  );
};
