import { Button } from '../Button';
import { SelectButtons } from '../SelectButtons';
import { Menu } from '../Menu';

export const MenuView = ({
  setAmount,
  setGameStarted,
  setBoardSize,
  boardSize,
}) => {
  return (
    <div>
      <div className="mg-menu">
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
        <Menu label="Przyciski sterujące">
          <Button
            isControl={true}
            onClick={() => {
              setGameStarted(true);
            }}
          >
            START
          </Button>
        </Menu>
      </div>
    </div>
  );
};
