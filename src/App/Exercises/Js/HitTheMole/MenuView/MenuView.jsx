import { Button } from '../Button/Button';
import { Menu } from '../Menu/Menu';
import { SelectButton } from '../SelectButton/SelectButton';
import './MenuView.css';

export const MenuView = ({ setGameStarted, setOptionsChosen}) => {
  return (
    <>
      <Menu label="Czas gry">
        <SelectButton
        setOptionsChosen ={setOptionsChosen}
          options={[
            {
              label: '1 minuta',
              isActive: true,
              value: 1,
            },
            {
              label: '2 minuty',
              isActive: false,
              value: 2,
            },
            {
              label: '3 minuty',
              isActive: false,
              value: 3,
            },
          ]}
        />
      </Menu>

      <Menu label="Liczba kretów">
  
        <Button>1 kret</Button>
        <Button>2 krety</Button>
        <Button isActive={true}>3 krety</Button>
      </Menu>

      <Menu label="Przyciski sterujące">
        <Button onClick={() => setGameStarted(true)}>Start</Button>
      </Menu>
    </>
  );
};