import { useState, useEffect } from 'react';
import './style.css';

//stworz banner, który będzie wyświetlał dowolny tekst
//tekst powinien zmieniać swój stan (przykładowo 5 razy na sekundę),
//a efektem zmiany powinno być przesuwanie napisu w lewo
//dodajemy button, który zatrzymuje oraz uruchamia aplikację

const BOX_WIDTH = 200;
const DELAY = 50;
const SPEED = 5;
const TEXT_WIDTH = 200;
const TEXT = 'Tekst';

export const SliderBanner = () => {
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
