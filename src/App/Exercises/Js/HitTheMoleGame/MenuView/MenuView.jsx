import './Menu.css';
import { Menu } from '../Menu/Menu';
import { Button } from '../Button/Button';
import { SelectButtons } from '../SelectButtons/SelectButtons';
import { Result } from '../Result/Result';

export const MenuView = ({
  setGameStarted,
  setTime,
  setScore,
  score,
  initialTime,
  time,
  setInitialTime,
  isGameStopped,
}) => {
  return (
    <>
      {(time === 0 || isGameStopped) && (
        <Result score={score} resultTime={initialTime - time} />
      )}
      <Menu label="Czas gry">
        <SelectButtons
          setOptionChosen={setTime}
          setInitialTime={setInitialTime}
          options={[
            {
              label: 'Debugowanie - 6s',
              isActive: false,
              value: 0.1,
            },
            {
              label: '1 minuta',
              isActive: false,
              value: 1,
            },
            {
              label: '2 minuty',
              isActive: false,
              value: 2,
            },
            {
              label: '3 minuty',
              isActive: false,
              value: 3,
            },
          ]}
        />
      </Menu>
      <Menu label="Liczba kretów">
        <SelectButtons
          setOptionChosen={() => {}}
          options={[
            {
              label: '1 kret',
              isActive: false,
              value: 1,
            },
            {
              label: '2 krety',
              isActive: false,
              value: 2,
            },
            {
              label: '3 krety',
              isActive: false,
              value: 3,
            },
          ]}
        />
      </Menu>
      <Menu label="Przyciski sterujące">
        <Button
          onClick={() => {
            setGameStarted(true);
            setScore(0);
          }}
        >
          Start
        </Button>
      </Menu>
      {/* {!isGameStarted ? (
        <Result
          setOptionChosen={setTime}
          score={score}
          initialTime={initialTime}
        /> */}
      {/* ) : ( 'Rozpocznij grę i sprawdź, jaki wynik osiągniesz' )} */}
    </>
  );
};
