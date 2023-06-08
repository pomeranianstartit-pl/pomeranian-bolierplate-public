import { Menu } from '../Menu/Menu';
import './GameView';
import { Button } from '../Button/Button';
import { useEffect, useState } from 'react';

export const GameView = ({ setGameStartedMemo }) => {
  const [memoTime, setMemoTime] = useState(0);

  useEffect(() => {
    const setTheTime = setTimeout(() => {
      memoTime >= 0 && setMemoTime(memoTime + 1);
    }, 1000);
    return () => clearTimeout(setTheTime);
  }, [memoTime]);

  return (
    <div>
      <Menu label="Czas gry">
        <Button isDisabled={true}>{memoTime}</Button>
      </Menu>
      <Menu label="Liczba ruchów">
        <Button isDisabled={true}>2</Button>
      </Menu>
      <Menu label="Przyciski sterujące">
        <Button
          isControl={true}
          onClick={() => {
            setGameStartedMemo(false);
          }}
        >
          PASS
        </Button>
      </Menu>
    </div>
  );
};
