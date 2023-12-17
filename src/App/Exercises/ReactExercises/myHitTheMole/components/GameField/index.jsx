import { MenuField } from '../MenuField';
import { Button } from '../Button';
import './styles.css';

export const GameField = ({ time, score, func }) => {
  return (
    <div className="game--field">
      <MenuField title="Czas do końca">
        <Button isDisabled={true}>{time}</Button>
      </MenuField>
      <MenuField title="Wynik">
        <Button isDisabled={true}>{score}</Button>
      </MenuField>
      <MenuField title="Przyciski Sterujące">
        <Button onClick={func}>STOP</Button>
      </MenuField>
    </div>
  );
};
