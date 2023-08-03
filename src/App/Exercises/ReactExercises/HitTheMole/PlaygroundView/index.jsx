import { useEffect, useState } from 'react';
import MoleImage from '../moleImage.svg';

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

export const PlaygroundView = () => {
  const [arrayWithMole, setArrayWithMole] = useState(initArrayWithMole);
  const [moleFieldId, setMoleFieldId] = useState(getRandomInt(10));

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log('test z interval');
      setMoleFieldId(getRandomInt(10));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="htm-stage">
      {arrayWithMole.map((element) => {
        return (
          <div className="htm-stage-cell">
            {element.id === moleFieldId && <img src={MoleImage} />}
          </div>
        );
      })}
    </div>
  );
};
