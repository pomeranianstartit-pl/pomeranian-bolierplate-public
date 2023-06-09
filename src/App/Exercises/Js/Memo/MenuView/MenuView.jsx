import './MenuView.css';
import { Menu } from '../Menu/Menu';
import { Button } from '../Button/Button';
import { SelectButtonsMemo } from '../SelectButtons/SelectButtonsMemo';

export const MenuView = ({ setGameStartedMemo }) => {
  return (
    <>
      <Menu label="Liczba elementów">
        <SelectButtonsMemo
          buttonOptions={[
            {
              value: 8,
              content: '8 elementów',
              isActive: false,
            },
          ]}
        />
        <Button isActive={true}>8 elementów</Button>
        <Button>16 elementów</Button>
        <Button>20 elementów</Button>
      </Menu>
      <Menu label="Przyciski sterujące">
        <Button
          isControl={true}
          onClick={() => {
            setGameStartedMemo(true);
          }}
        >
          START
        </Button>
      </Menu>
    </>
  );
};
