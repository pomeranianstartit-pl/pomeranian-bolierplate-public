import { Button } from '../Button/Button';
import { Menu } from '../Menu/Menu';
import { SelectButtons } from '../SelectButtons/SelectButtons';
// import './MenuView.css';

export const MenuView = ({ onClick, setGameStarted, setBoardSize }) => {
  return (
    <>
      <Menu label="LICZBA ELEMENTÓW">
        <SelectButtons
          setValue={setBoardSize}
          options={[
            {
              value: 8,
              content: '8 elementów',
              isActive: false,
            },
            {
              value: 16,
              content: '16 elementów',
              isActive: false,
            },
            {
              value: 20,
              content: '20 elementów',
              isActive: false,
            },
          ]}
        />
      </Menu>
      <Menu label="przyciski sterujące">
        <Button onClick={() => setGameStarted(true)}>START</Button>
      </Menu>
    </>
  );
};
