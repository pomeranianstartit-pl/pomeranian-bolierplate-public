import { Button } from '../Button';
import { Menu } from '../Menu';
import { SelectButtons } from '../SelectButtons';

export const MenuView = ({
  setTime,
  setNumberOfMoles,
  setInitialTime,
  setScore,
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

  const handleMoleClick = (value) => {
    setNumberOfMoles(value);
  };

  return (
    <div className="htm-menu">
      <Menu label="Czas gry">
        <SelectButtons
          // state odpowiedzialny za czas gry
          setValue={handleTimeClick}
          options={[
            { value: 60, label: '1 minuta', isActive: true },
            { value: 120, label: '2 minuta', isActive: false },
            { value: 180, label: '3 minuta', isActive: false },
          ]}
        />
      </Menu>

      <Menu label="Liczba kretów">
        <SelectButtons
          setValue={handleMoleClick}
          options={[
            { value: 1, label: '1 kret', isActive: true },
            { value: 2, label: '2 krety', isActive: false },
            { value: 3, label: '3 krety', isActive: false },
          ]}
        />
      </Menu>

      <Menu label="Przyciski sterujące">
        <Button onClick={handleStartClick}>Start</Button>
      </Menu>
    </div>
  );
};
