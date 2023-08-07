import { useEffect, useState } from 'react';

const initArrayWithLetters = [
  {
    id: 1,
    hasClicked: false,
  },
  {
    id: 2,
    hasClicked: false,
  },
  {
    id: 3,
    hasClicked: false,
  },
  {
    id: 4,
    hasClicked: false,
  },
  {
    id: 5,
    hasClicked: false,
  },
  {
    id: 6,
    hasClicked: false,
  },
  {
    id: 7,
    hasClicked: false,
  },
  {
    id: 8,
    hasClicked: false,
  },
  {
    id: 9,
    hasClicked: false,
  },
  {
    id: 10,
    hasClicked: false,
  },
  {
    id: 11,
    hasClicked: false,
  },
  {
    id: 12,
    hasClicked: false,
  },
  {
    id: 13,
    hasClicked: false,
  },
  {
    id: 14,
    hasClicked: false,
  },
  {
    id: 15,
    hasClicked: false,
  },
  {
    id: 16,
    hasClicked: false,
  },
];

const getRandomInt = (max) => Math.floor(Math.random() * max) + 1;
export const PlaygroundView = ({ sore, setScore }) => {
  const [arrayWithLetters, setArrayWithLetters] =
    useState(initArrayWithLetters);
  const [memoFieldId, setMemoFieldId] = useState(getRandomInt(16));

  /*const handleScore = (isMemoPresent) => isMemoPresent && setScore(score + 1);

  const handleScore = (isMemoPresent) => {
    isMemoPresent && setScore(score + 1);
    !isMemoPresent && score > 0 && setScore(score - 1);
  };*/

  const handleReset = () => {
    setTimeout(() => {
      setArrayWithLetters(
        arrayWithLetters.map((field) => {
          return {
            ...field,
            hasClicked: false,
          };
        })
      );
    }, 300);
  };

  const handleClick = (clickedElement, isMemoPresent) => {
    setArrayWithLetters(
      arrayWithLetters.map((field) => {
        return {
          ...field,
          hasClicked: field.id === clickedElement.id,
        };
      })
    );

    handleReset();
    /*handleScore(isMemoPresent);*/

    // TODO: add score functionality
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log('test z interval');
      setMemoFieldId(getRandomInt(16));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="htm-stage-memo">
      {arrayWithLetters.map((element) => {
        const isMemoPresent = element.id === memoFieldId;
        const isClickedFieldWithMemoClass =
          isMemoPresent && element.hasClicked ? 'htm-stage-cell--green' : '';
        const isClickedFieldWithoutMemoClass =
          !isMemoPresent && element.hasClicked ? 'htm-stage-cell--red' : '';
        return (
          <div
            key={element.id}
            onClick={() => handleClick(element, isMemoPresent)}
            className={`htm-stage-cell ${isClickedFieldWithMemoClass} ${isClickedFieldWithoutMemoClass}`}
          >
            {isMemoPresent}
          </div>
        );
      })}
    </div>
  );
};
