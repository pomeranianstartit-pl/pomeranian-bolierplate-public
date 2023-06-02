import { Menu } from '../Menu/Menu';
import { Button } from '../Button/Button';
import './GameView.css';

export const GameView = ({}) => {
  return (
    <>
      <Menu label="Czas do końca">
        <div className="value-field">[czasss]</div>
      </Menu>

      <Menu label="Wynik">
        <div className="value-field">{2}</div>
      </Menu>

      <Menu label="Przyciski sterujące">
        <Button onClick={() => {}}>Stop</Button>
      </Menu>
    </>
  );
};
