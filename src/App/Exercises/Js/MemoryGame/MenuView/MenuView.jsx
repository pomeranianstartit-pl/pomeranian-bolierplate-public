import { Button } from '../Button/Button';
import { Menu } from '../Menu/Menu';
// import { SelectButtons } from '../SelectButtons/SelectButtons';

export const MenuView = () => {
  return (
    <>
      <Menu label="liczba elementów">
        <Button onClick={console.log(1)}>8 elementów</Button>
        <Button>16 elementów</Button>
        <Button>20 elementów</Button>
      </Menu>
      <Menu label="przyciski sterujące">
        <Button>START</Button>
      </Menu>
    </>
  );
};
