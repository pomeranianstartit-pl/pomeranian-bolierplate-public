// import './styles.css';
// export const Exercices = () => {
//   return (
//     <div>
//       <div className="container">
//         <div className="text"> I Love Javascript</div>
//       </div>
//     </div>
//   );
// };

import { useState, useEffect } from 'react';

const BOX_WIDTH = 200;

const DELAY = 50;

const SPEED = 2;

const TEXT_WIDTH = 200;

const TEXT = 'Tekst';

export const Exercices = () => {
  const [position, setPosition] = useState(BOX_WIDTH);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prevPosition) => {
        const newPosition = prevPosition - SPEED;
        if (newPosition + TEXT_WIDTH <= 0) {
          return BOX_WIDTH;
        } else {
          return newPosition;
        }
      });
    }, DELAY);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        width: `${BOX_WIDTH}px`,
        height: '25px',
        overflow: 'hidden',
        position: 'relative',
        border: '1px solid black',
      }}
    >
      <div
        style={{
          position: 'absolute',
          left: `${position}px`,
        }}
      >
        {TEXT}
      </div>

      <div
        style={{
          position: 'absolute',
          left: `${position + BOX_WIDTH}px`,
        }}
      >
        {TEXT}
      </div>
    </div>
  );
};
