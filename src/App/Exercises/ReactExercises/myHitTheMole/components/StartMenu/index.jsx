import { Button } from '../Button';
import { MenuField } from '../MenuField';
import { SelectButtons } from '../SelectButtons';
import './styles.css';

export const StartMenu = ({
  setGameTime,
  setNumberOfMoles,
  handleStartGame,
}) => {
  return (
    <div className="start--menu">
      <MenuField title="Czas gry">
        <SelectButtons
          setValue={setGameTime}
          options={[
            {
              isDisable: false,
              isActive: true,
              value: 15,
              content: '1 minuta',
            },
            {
              isDisable: false,
              isActive: false,
              value: 120,
              content: '2 minuty',
            },
            {
              isDisable: false,
              isActive: false,
              value: 180,
              content: '3 minuty',
            },
          ]}
        />
      </MenuField>
      <MenuField title="Liczba Kretów">
        <SelectButtons
          setValue={setNumberOfMoles}
          options={[
            {
              isActive: true,
              value: 1,
              content: '1 Kret',
            },
            {
              isActive: false,
              value: 2,
              content: '2 Krety',
            },
            {
              isActive: false,
              value: 3,
              content: '3 krety',
            },
          ]}
        />
      </MenuField>
      <MenuField title="Przyciski sterujące">
        <Button isActive={false} onClick={() => handleStartGame()}>
          START
        </Button>
      </MenuField>
    </div>
  );
};
