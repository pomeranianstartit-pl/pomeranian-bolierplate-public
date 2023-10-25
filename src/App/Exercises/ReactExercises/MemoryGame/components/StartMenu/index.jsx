import { Button } from '../Button';
import { MenuField } from '../MenuField';
import { SelectButtons } from '../SelectButtons';

export const StartMenu = ({ startGame, setBoardSize }) => {
  return (
    <div>
      <MenuField title="Liczba elementów">
        <SelectButtons
          setValue={setBoardSize}
          options={[
            {
              value: 8,
              label: '8 elementów',
            },
            {
              value: 16,
              label: '16 elementów',
              isActive: true,
            },
            {
              value: 20,
              label: '20 elementów',
            },
          ]}
        />
      </MenuField>
      <MenuField title="Przyciski sterujące">
        <Button onClick={startGame}>Start</Button>
      </MenuField>
    </div>
  );
};