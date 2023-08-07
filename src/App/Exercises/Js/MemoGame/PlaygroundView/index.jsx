import { useEffect, useState } from 'react';

const initArrayWithLetters = [
  {
    id: 1,
    name: 'A',
    hasClicked: false,
  },
  {
    id: 2,
    name: 'A',
    hasClicked: false,
  },
  {
    id: 3,
    name: 'B',
    hasClicked: false,
  },
  {
    id: 4,
    name: 'B',
    hasClicked: false,
  },
  {
    id: 5,
    name: 'C',
    hasClicked: false,
  },
  {
    id: 6,
    name: 'C',
    hasClicked: false,
  },
  {
    id: 7,
    name: 'D',
    hasClicked: false,
  },
  {
    id: 8,
    name: 'D',
    hasClicked: false,
  },
  {
    id: 9,
    name: 'E',
    hasClicked: false,
  },
  {
    id: 10,
    name: 'E',
    hasClicked: false,
  },
  {
    id: 11,
    name: 'F',
    hasClicked: false,
  },
  {
    id: 12,
    name: 'F',
    hasClicked: false,
  },
  {
    id: 13,
    name: 'G',
    hasClicked: false,
  },
  {
    id: 14,
    name: 'G',
    hasClicked: false,
  },
  {
    id: 15,
    name: 'H',
    hasClicked: false,
  },
  {
    id: 16,
    name: 'H',
    hasClicked: false,
  },
];

const getRandomInt = (max) => Math.floor(Math.random() * max) + 1;
export const PlaygroundView = ({ score, setScore }) => {
  const [arrayWithLetters, setArrayWithLetters] =
    useState(initArrayWithLetters);

  const [memoFieldId, setMemoFieldId] = useState(-1);

  const handleScore = (isMemoPresent) => {
    isMemoPresent && setScore(score + 1);
    !isMemoPresent && score > 0 && setScore(score - 1);
  };

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
    }, 500);
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

    setMemoFieldId(clickedElement.id);

    console.log({ arrayWithLetters });

    //handleReset();
    handleScore(isMemoPresent);

    // TODO: add score functionality
  };

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
            {element.name}
          </div>
        );
      })}
    </div>
  );
};
