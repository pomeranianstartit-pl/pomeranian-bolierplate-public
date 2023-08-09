import { useState, useEffect } from 'react';
import './styles.css';

function shuffleArray(s) {
  for (let i = s.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [s[i], s[j]] = [s[j], s[i]];
  }

  return s;
}

const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const alphabet = alpha.map((x) => String.fromCharCode(x));

const getRandomLetters = (amount) => {
  const shuffled = [...alphabet].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, amount);
};

const generateBoard = (size) => {
  const randomLetters = getRandomLetters(size / 2);
  const letters = randomLetters.map((letter) => {
    return {
      id: null,
      value: letter,
      isPaired: false,
    };
  });

  const mergedLetters = [...letters, ...letters];

  return shuffleArray(mergedLetters).map((obj, index) => {
    return {
      ...obj,
      id: index + 1,
    };
  });
};

export const PlaygroundView = ({
  boardSize,
  setGameEnded,
  setGameStarted,
  setMyTime,
  time,
  setAmount,
  amount,
}) => {
  const [board, setBoard] = useState(generateBoard(boardSize));
  const [firstClickedFieldId, setFirstClickedFieldId] = useState(null);
  const [secondClickedFieldId, setSecondClickedFieldId] = useState(null);

  const handleClick = (object) => {
    const isFirstClickedSetAndIsDifferentThanPrev =
      firstClickedFieldId && firstClickedFieldId !== object.id;

    if (isFirstClickedSetAndIsDifferentThanPrev) {
      setSecondClickedFieldId(object.id);
      resetClick(setSecondClickedFieldId);
    } else {
      setFirstClickedFieldId(object.id);
      resetClick(setFirstClickedFieldId);
    }
  };

  const resetClick = (callback) => {
    setTimeout(() => callback(undefined), 1000);
  };

  useEffect(() => {
    if (firstClickedFieldId && secondClickedFieldId) {
      setAmount(amount + 1);
      const firstClickedFieldValue = board.find(
        (item) => item.id === firstClickedFieldId
      ).value;
      const secondClickedFieldValue = board.find(
        (item) => item.id === secondClickedFieldId
      ).value;
      if (firstClickedFieldValue === secondClickedFieldValue) {
        setBoard(
          board.map((field) => {
            return {
              ...field,
              isPaired: field.isPaired
                ? true
                : firstClickedFieldId === field.id ||
                  secondClickedFieldId === field.id,
            };
          })
        );
      }
    }
  }, [firstClickedFieldId, secondClickedFieldId]);

  useEffect(() => {
    if (board.find((item) => item.isPaired === false)) {
      setGameEnded(false);
    } else {
      setGameStarted(false);
      setGameEnded(true);
      setMyTime(time);
    }
  }, [board]);

  return (
    <div className="board">
      {board.map((element) => {
        const isClicked =
          firstClickedFieldId === element.id ||
          secondClickedFieldId === element.id;
        const canShowValue = isClicked || element.isPaired;
        const clickFieldClassName = isClicked ? 'field-clicked' : '';
        const pairedFieldClassName = element.isPaired ? 'field-paired' : '';
        return (
          <div
            key={element.id}
            className={`board-field ${clickFieldClassName} ${pairedFieldClassName}`}
            onClick={() => handleClick(element)}
          >
            {canShowValue && element.value}
          </div>
        );
      })}
    </div>
  );
};
