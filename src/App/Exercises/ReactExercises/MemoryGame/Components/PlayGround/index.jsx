import { useEffect, useState } from 'react';

import { generateBoard } from '../../helper';

import './styles.css';

export const Playground = ({
  boardSize = 16,
  setGameStarted,
  setGameEnded,
}) => {
  const [board, setBoard] = useState(generateBoard(boardSize));
  const [firstClickedId, setFirstClickedId] = useState();
  const [secondClickedId, setSecondClickedId] = useState();

  const handleClick = (id) => {
    const isFirstClickedAndDiffrentThanPrevious =
      firstClickedId && firstClickedId !== id;

    if (isFirstClickedAndDiffrentThanPrevious) {
      setSecondClickedId(id);
      resetClickedField(setSecondClickedId);
    } else {
      setFirstClickedId(id);
      resetClickedField(setFirstClickedId);
    }
  };

  const resetClickedField = (callback) => {
    setTimeout(() => {
      callback(undefined);
    }, 1000);
  };

  useEffect(() => {
    if (firstClickedId && secondClickedId) {
      const firstFound = board.find((item) => item.id === firstClickedId).value;
      const secondFound = board.find(
        (item) => item.id === secondClickedId
      ).value;

      if (firstFound === secondFound) {
        setBoard(
          board.map((field) => {
            const isPaired = field.isPaired
              ? true
              : firstClickedId === field.id || secondClickedId === field.id;
            return {
              ...field,
              isPaired,
            };
          })
        );
      }
    }
  }, [firstClickedId, secondClickedId]);

  useEffect(() => {
    if (board.find((item) => item.isPaired === false)) {
      setGameEnded(false);
    } else {
      setGameStarted(false);
      setGameEnded(true);
    }
  }, [board]);

  return (
    <div className="memory-fields">
      {board.map(({ id, isPaired, value }) => {
        const isClicked = firstClickedId === id || secondClickedId === id;
        const canShowValue = isClicked || isPaired;
        const clickedClassName = isClicked ? 'memory-field--clicked' : '';
        const pairedClassName = isPaired ? 'memory-field--clicked' : '';

        const className = `memory-field ${clickedClassName} ${pairedClassName}`;
        return (
          <div onClick={() => handleClick(id)} className={className}>
            {canShowValue && value}
          </div>
        );
      })}
    </div>
  );
};
