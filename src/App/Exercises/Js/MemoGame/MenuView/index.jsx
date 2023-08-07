import { Button } from '../Button';
import { Menu } from '../Menu';
import { SelectButtons } from '../SelectButtons';

export const MenuView = ({
  setTime,
  setInitialTime,
  setScore,
  setNumberOfMemo,
  setGameStarted,
  setGameStopped,
}) => {
  const handleStartClick = () => {
    setScore(0);
    setGameStopped(false);
    setGameStarted(true);
  };
  const handleTimeClick = (value) => {
    setTime(value);
    setInitialTime(value);
    setGameStopped(false);
  };

  const handleMemoClick = (value) => {
    setNumberOfMemo(value);
  };

  return (
    <div className="htm-menu-memo">
      <Menu label="Liczba elementów">
        <SelectButtons
          setValue={handleTimeClick}
          options={[
            { value: 1, label: '8 elementów', isActive: true },
            { value: 1, label: '16 elementów', isActive: false },
            { value: 1, label: '20 elementy', isaActive: false },
          ]}
        />
      </Menu>

      <Menu label="Przyciski sterujące">
        <Button onClick={handleStartClick}>Start</Button>
      </Menu>
    </div>
  );
};
