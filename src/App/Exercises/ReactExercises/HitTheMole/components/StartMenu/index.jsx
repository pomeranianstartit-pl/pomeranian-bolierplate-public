import { MenuField } from '../MenuField';
import { SelectButtons } from '../SelectButtons';
import { Button } from '../Button';

export const StartMenu = ({
  setInitialTime,
  setMoleAmount,
  setGameStarted,
}) => {
  const handleStart = () => {
    setGameStarted(true);
  };

  return (
    <div>
      <MenuField title="Czas gry">
        <SelectButtons
          setValue={setInitialTime}
          options={[
            {
              value: 60,
              content: '1 minuta',
              isActive: true,
            },
            {
              value: 120,
              content: '2 minuty',
            },
            {
              value: 180,
              content: '3 minuty',
            },
          ]}
        />
      </MenuField>

      <MenuField title="Liczba kretów">
        <SelectButtons
          setValue={setMoleAmount}
          options={[
            {
              value: 1,
              content: '1 kret',
              isActive: true,
            },
            {
              value: 2,
              content: '2 krety',
            },
            {
              value: 3,
              content: '3 krety',
            },
          ]}
        />
      </MenuField>
      <MenuField title="Przyciski sterujące">
        <Button onClick={handleStart}>Start</Button>
      </MenuField>
    </div>
  );
};
