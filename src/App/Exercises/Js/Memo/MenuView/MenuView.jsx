import './MenuView.css';
import { Menu } from '../Menu/Menu';
import { Button } from '../Button/Button';

export const MenuView = () => {
  return (
    <>
      <Menu label="Liczba elementów">
        <Button>8 elementów</Button>
        <Button>16 elementów</Button>
        <Button>20 elementów</Button>
      </Menu>
      <Menu label="Przyciski sterujące">
        <Button isControl={true}>START</Button>
      </Menu>
    </>
  );
};
