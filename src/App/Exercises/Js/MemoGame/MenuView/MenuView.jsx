import './MenuView.css';
import { Menu } from '../Menu/Menu';
import { Button } from '../Button/Button';

export const MenuView = () => {
  return (
    <>
      <Menu label="LICZBA ELEMENTÓW">
        <Button>8 elementów</Button>
        <Button>16 elementów</Button>
        <Button>20 elementów</Button>
      </Menu>
      <Menu label="PRZYCISKI STERUJĄCE">
        <Button>START</Button>
      </Menu>
    </>
  );
};
