import { useState } from 'react';
import { MenuField } from '../MenuField';
import { SelectButtons } from '../SelectButtons';
import { Button } from '../Button';

export const GameField = (time) => {
  const [timeLeft, setTimeLeft] = useState(time);
  const [score, setScore] = useState(0);
  return (
    <div className="game--field">
      <MenuField title="Czas do końca">
        <Button isDisabled={true}>{timeLeft}</Button>
      </MenuField>
    </div>
  );
};
