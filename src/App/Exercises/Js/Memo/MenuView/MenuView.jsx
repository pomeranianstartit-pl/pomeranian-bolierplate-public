import './MenuView.css';
import { Menu } from '../Menu/Menu';
import { Button } from '../Button/Button';
import { SelectButtonsMemo } from '../SelectButtons/SelectButtonsMemo';

export const MenuView = ({ setGameStartedMemo, setBoardSize }) => {
  return (
    <>
      <Menu label="Liczba elementów">
        <SelectButtonsMemo
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
