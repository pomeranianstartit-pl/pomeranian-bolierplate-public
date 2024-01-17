import { MenuField } from '../MenuField';
import { Button } from '../Button';
import './styles.css';
import { formatTime } from '../../helper';
export const GameMenu = ({ stopGame, time, score }) => {
  const handleStop = () => {
    stopGame();
  };

  return (
    <div>
      <MenuField title="Czas do końca gry">
        <Button isDisabled>{formatTime(time * 1000)} </Button>
      </MenuField>

      <MenuField title="Wynik">
        <Button isDisabled>{score}</Button>
      </MenuField>
      <MenuField title="Przyciski sterujące">
        <Button
          classNames="Container-Red-Button-Hit-The-Mole "
          onClick={handleStop}
        >
          Stop
        </Button>
      </MenuField>
    </div>
  );
};
