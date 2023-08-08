import { Button } from '../Button';
import { Menu } from '../Menu';
import { useEffect } from 'react';

export const GameView = ({
  setGameStarted,
  time,
  setTime,
  setGameStopped,
  INITIAL_TIME,
}) => {
  const handleStopClick = () => {
    setTime(INITIAL_TIME);
    setGameStarted(false);
    setGameStopped(true);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      time > 0 && setTime(time - 1);
    }, 1000);

    time === 0 && setGameStopped(true);

    return () => clearTimeout(timeoutId);
  }, [time, setTime, setGameStopped]);

  return (
    <div className="mg-score">
      <Menu label="CZAS GRY">
        <Button isDisabled={true}>{time}</Button>
      </Menu>

      <Menu label="LICZBA RUCHÓW">
        <Button isDisabled={true}>2</Button>
      </Menu>

      <Menu label="PRZYCISKI STERUJĄCE">
        <Button onClick={handleStopClick}>PASS</Button>
      </Menu>
    </div>
  );
};
