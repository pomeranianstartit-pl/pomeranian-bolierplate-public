import { Button } from '../Button';
import { Menu } from '../Menu';
import { SelectButtons } from '../SelectButtons';

export const MenuView = ({ setGameStarted }) => {
  return (
    <div className="htm-menu">
      <Menu label="Czas gry">
        <SelectButtons
          options={[
            { value: 1, label: '1 minuta', isActive: true },
            { value: 2, label: '2 minuta', isActive: false },
            { value: 3, label: '3 minuta', isActive: false },
          ]}
        />
      </Menu>

      <Menu label="Liczba kretów">
        <SelectButtons
          options={[
            { value: 1, label: '1 kret', isActive: true },
            { value: 2, label: '2 krety', isActive: false },
            { value: 3, label: '3 krety', isActive: false },
          ]}
        />
      </Menu>

      <Menu label="Przyciski sterujące">
        <Button onClick={() => setGameStarted(true)}>Start</Button>
      </Menu>
    </div>
  );
};
