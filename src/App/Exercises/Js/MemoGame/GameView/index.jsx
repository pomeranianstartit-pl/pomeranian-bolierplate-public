import { Button } from '../Button';
import { Menu } from '../Menu';
import { useEffect } from 'react';

export const GameView = ({
  initialTime,
  time,
  setTime,
  setElements,
  score,
  setGameStarted,
  setGameStopped,
}) => {
  const handleStopClick = () => {
    setTime(initialTime);
    setGameStarted(false);
    setGameStopped(true);
    setElements(8);
  };
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      time > 0 && setTime(time - 1);
    }, 1000);
    if (time === 0) {
      setGameStopped(true);
    }

    return () => clearTimeout(timeoutId);
  }, [time, setTime, setGameStopped]);

  return (
    <div className="htm-menu-memo">
      <Menu label="Czas gry">
        <Button isDisabled={true}>{time}</Button>
      </Menu>

      <Menu label="Wynik">
        <Button isDisabled={true}>{score}</Button>
      </Menu>
      <Menu label="Przyciski sterujące">
        <Button onClick={handleStopClick}>Stop</Button>
      </Menu>
    </div>
  );
};
