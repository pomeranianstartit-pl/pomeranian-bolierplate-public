import { Menu } from '../Menu/Menu';
import './GameView';
import { Button } from '../Button/Button';


export const GameView = ({ setGameStartedMemo, time, amount, setAmount}) => {
    return (
    <div>
      <Menu label="Czas gry">
        <Button isDisabled={true}>{time}</Button>
      </Menu>
      <Menu label="Liczba ruchów">
        <Button isDisabled={true}>{amount}</Button>
      </Menu>
      <Menu label="Przyciski sterujące">
        <Button
          isControl={true}
          onClick={() => {
            setGameStartedMemo(false);
            setAmount(0);
          }}
          
        >
          PASS
        </Button>
      </Menu>
    </div>
  );
};
