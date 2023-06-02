import { Menu } from '../Menu/Menu';
import { Button } from '../Button/Button';
import './GameView.css';

export const GameView = ({ setGameStarted }) => {
  return (
    <>
      <Menu label="Czas do końca">
        <div className="value-field">[czass]</div>
      </Menu>
      <Menu label="Wynik">
        <div className="value-field">score</div>
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
