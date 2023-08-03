import { useEffect, useState } from 'react';
import { MoleIcon } from '../../../../Components/Icons/MoleIcon';

const initArrayWithMole = [
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
];

const getRandomInt = (max) => Math.floor(Math.random() * max) + 1;

export const PlaygroundView = ({ score, setScore }) => {
  const [arrayWithMole, setArrayWithMole] = useState(initArrayWithMole);
  const [moleFieldId, setMoleFieldId] = useState(getRandomInt(10));

  const handleScore = (isMolePresent) => {
    // if (isMolePresent) {
    //   setScore(score + 1);
    // } else if (!isMolePresent && score > 0) {
    //   setScore(score - 1);
    // }

    isMolePresent && setScore(score + 1);
    !isMolePresent && score > 0 && setScore(score - 1);
  };

  const handleReset = () => {
    setTimeout(() => {
      setArrayWithMole(
        arrayWithMole.map((field) => {
          return {
            ...field,
            hasClicked: false,
          };
        })
      );
    }, 300);
  };

  const handleClick = (clickedElement, isMolePresent) => {
    setArrayWithMole(
      arrayWithMole.map((field) => {
        return {
          ...field,
          hasClicked: field.id === clickedElement.id,
        };
      })
    );

    handleReset();
    handleScore(isMolePresent);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setMoleFieldId(getRandomInt(10));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="htm-stage">
      {arrayWithMole.map((element) => {
        const isMolePresent = element.id === moleFieldId;
        const isClickedFieldWithMoleClass =
          isMolePresent && element.hasClicked ? 'htm-stage-cell--green' : '';
        const isClickedFieldWithoutMoleClass =
          !isMolePresent && element.hasClicked ? 'htm-stage-cell--red' : '';
        return (
          <div
            key={element.id}
            onClick={() => handleClick(element, isMolePresent)}
            className={`htm-stage-cell ${isClickedFieldWithMoleClass} ${isClickedFieldWithoutMoleClass}`}
          >
            {isMolePresent && <MoleIcon />}
          </div>
        );
      })}
    </div>
  );
};
