import { MenuField } from '../MenuField';
import { Button } from '../Button';

export const GameMenu = ({ stopGame, time, score }) => {
  const handleStop = () => {
    stopGame();
  };

  return (
    <div>
      <MenuField title="Czas gry">
        <Button isDisabled>{time}</Button>
      </MenuField>

      <MenuField title="Wynik">
        <Button isDisabled>{score}</Button>
      </MenuField>
      <MenuField title="Przyciski sterujące">
        <Button onClick={handleStop}>Stop</Button>
      </MenuField>
    </div>
  );
};
