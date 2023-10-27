import './styles.css';
import { useState, useEffect } from 'react';

// ćwiczenie
// stwórz baner, któy będzie wyświetlał dowolny tekst
// tekst powinien zmieniać swój stan - a efektem zmiany stanu powinno
// być przesuwanie się napisu w lewo
// dodajemy button któy zatrzymuj oraz uruchamia animację

export const Exercise = () => {
  const [intervalCount, setIntervalCount] = useState(0);
  const [start, setStart] = useState(false);
  const handleClick = () => {
    setStart((prevState) => !prevState);
  };

  useEffect(() => {
    if (!start) return;
    if (intervalCount == 240) setIntervalCount(0);

    const interval = setInterval(() => {
      setIntervalCount((prevCount) => prevCount + 1);
    }, 100);

    return () => clearInterval(interval);
  }, [intervalCount, start]);

  useEffect(() => {
    setStart(true);
  }, []);

  return (
    <div>
      <h3>Przesuwany banner</h3>
      <div className="container--jsSlidingBannerBackground">
        <div
          className="container--jsSlidingBanner"
          style={{ left: intervalCount }}
        >
          I love JavaScript!
        </div>
      </div>

      <div>Wartosc: {intervalCount}</div>
      <button onClick={handleClick}>Start/stop</button>
      <TextAnimation />
    </div>
  );
};

const BOX_WIDTH = 200;
const DELAY = 50;
const SPEED = 5;
const TEXT_WIDTH = 200;
const TEXT = 'JavaScript!';

const TextAnimation = () => {
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
