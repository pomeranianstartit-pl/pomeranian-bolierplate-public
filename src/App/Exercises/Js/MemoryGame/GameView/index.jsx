import { Button } from '../Button';
import { Menu } from '../Menu';
import { useEffect } from 'react';

export const GameView = ({
  setGameStarted,
  time,
  setTime,
  setGameEnded,
  amount,
}) => {
  const handleStopClick = () => {
    setTime(0);
    setGameStarted(false);
    setGameEnded(true);
  };

  return (
    <div className="mg-score">
      <Menu label="CZAS GRY">
        <Button isDisabled={true}>{time}</Button>
      </Menu>

      <Menu label="LICZBA RUCHÓW">
        <Button isDisabled={true}>{amount}</Button>
      </Menu>

      <Menu label="PRZYCISKI STERUJĄCE">
        <Button onClick={handleStopClick}>PASS</Button>
      </Menu>
    </div>
  );
};
