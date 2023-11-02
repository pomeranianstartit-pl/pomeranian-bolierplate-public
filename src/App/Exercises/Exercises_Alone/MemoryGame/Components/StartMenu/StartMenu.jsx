import { Button } from '../Button/Button';
import { MenuField } from '../MenuField/MenuField';
import { SelectButtons } from '../SelectButton/SelectButton';

export const StartMenu = (setGameStarted, setTilesAmount) => {
  const handleStart = () => {
    setGameStarted(true);
  };
  return (
    <>
      <MenuField title={'liczba elementów'}>
        <SelectButtons
          setValue={setTilesAmount}
          options={[
            { value: 8, content: `8 elementów`, isActive: true },
            { value: 16, content: `16 elementów` },
            { value: 20, content: `20 elementów` },
          ]}
        />
      </MenuField>
      <MenuField title={'przyciski sterujące'}>
        <Button onClick={handleStart}>start</Button>
      </MenuField>
    </>
  );
};
