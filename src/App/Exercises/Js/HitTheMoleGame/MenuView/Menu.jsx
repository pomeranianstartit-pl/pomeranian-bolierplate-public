import './Menu.css';
import { Menu } from '../Menu/Menu';
import { Button } from '../Button/Button';
import { SelectButtons } from '../SelectButtons/SelectButtons';

export const MenuView = ({ setGameStarted }) => {
  return (
    <>
      <Menu label="Czas gry">
        <SelectButtons
          options={[
            {
              label: '1 minuta',
              time: 60,
              isActive: false,
              value: 1,
            },
            {
              label: '2 minuty',
              time: 120,
              isActive: false,
              value: 2,
            },
            {
              label: '3 minuty',
              time: 180,
              isActive: false,
              value: 3,
            },
          ]}
        />
      </Menu>
      <Menu label="Liczba kretów">
        <SelectButtons
          options={[
            {
              label: '1 kret',
              isActive: false,
              value: 1,
            },
            {
              label: '2 krety',
              isActive: false,
              value: 2,
            },
            {
              label: '3 krety',
              isActive: false,
              value: 3,
            },
          ]}
        />
      </Menu>
      <Menu label="Przyciski sterujące">
        <Button onClick={() => setGameStarted(true)}>Start</Button>
      </Menu>
    </>
  );
};
