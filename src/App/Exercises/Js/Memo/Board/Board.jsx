import './Board.css';
import { useEffect, useState } from 'react';

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
    return { ...obj, id: index + 1 };
  });
};

export const Board = ({ boardSize, amount, setAmount, setGameEnded, gameEnded, myTime, setGameStartedMemo, setMyTime, time}) => {

  const [board, setBoard] = useState(generateBoard(boardSize));
  const [firstClickedFieldId, setFirstClickedFieldId] = useState();
  const [secondClickedFieldId, setSecondClickedFieldId] = useState();

  const handleClickBoard = (object) => {
    const isFirstClickedSetAndIsDifferentThanPrev =
      firstClickedFieldId && firstClickedFieldId !== object.id;
    if (isFirstClickedSetAndIsDifferentThanPrev) {
      setSecondClickedFieldId(object.id);
      resetSecondFieldClickedId();
    } else {
      setFirstClickedFieldId(object.id);
      resetFirstFieldClickedId();
    }
  };

  const resetFirstFieldClickedId = () => {
    setTimeout(() => {
      setFirstClickedFieldId(undefined);
    }, 3000);
  };

  const resetSecondFieldClickedId = () => {
    setTimeout(() => {
      setSecondClickedFieldId(undefined);
    }, 3000);
  };

  useEffect(() => {
    if (firstClickedFieldId && secondClickedFieldId) {

      setAmount(amount+1)
      const firstClickedFieldValue = board.find(
        (item) => item.id === firstClickedFieldId
      ).value;
      const secondClickedFieldValue = board.find(
        (item) => item.id === secondClickedFieldId
      ).value;

      if (firstClickedFieldValue === secondClickedFieldValue) {
        setBoard(
          board.map((field) => {
            const isClickedFieldPaired =
              field.id === firstClickedFieldId ||
              field.id === secondClickedFieldId;
            return {
              ...field,
              isPaired: field.isPaired ? true : isClickedFieldPaired,
            };
          })
        );
      }
    }
  }, [firstClickedFieldId, secondClickedFieldId]);


  useEffect(()=>{
    if (board.find((element) => element.isPaired === false)) {
      setGameEnded(false)
    } else {
      setGameStartedMemo(false)
      setGameEnded(true)
      setMyTime(time)
    }
  }, [board])

  return (
    <div className="board">
      {board.map((element) => {
        const isClicked =
          firstClickedFieldId === element.id ||
          secondClickedFieldId === element.id;
        const canShowValue = isClicked || element.isPaired;
        const clickedFieldClassName = isClicked
          ? 'board-field-clicked-green'
          : '';
        const pairedFieldClassName = element.isPaired ? 'field-paired' : '';

        return (
          <div
            className={`board-field ${clickedFieldClassName} ${pairedFieldClassName}`}
            onClick={() => {
              handleClickBoard(element);
            }}
          >
            {canShowValue && element.value}{' '}
          </div>
        );
      })}
    </div>
  );
};
