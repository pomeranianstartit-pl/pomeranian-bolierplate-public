import { useState, useEffect } from 'react';
import './styles.css';

const startStize = 10;
const endSize = 100;

export const JsAnimation = ({ duration = 5000 }) => {
  const [size, setSize] = useState(startStize);
  const [isIncrementing, setIsIncrementing] = useState(true);

  const distance = (endSize - startStize) * 2; // 180
  const noOfSteps = 20;
  const stepSize = Math.round(distance / noOfSteps);
  const midWay = startStize + stepSize * (noOfSteps / 2);
  const stepInterval = Math.round(duration / noOfSteps);

  function useEffectCallback() {
    function increment() {
      setSize(function (currentSize) {
        return currentSize + stepSize;
      });
    }
    function decrement() {
      setSize(function (currentSize) {
        return currentSize - stepSize;
      });
    }

    const intervalId = setInterval(
      isIncrementing ? increment : decrement,
      stepInterval
    );
    return function () {
      clearInterval(intervalId);
    };
  }

  useEffect(useEffectCallback, [isIncrementing, stepInterval, stepSize]);

  useEffect(
    function () {
      if (size === midWay) setIsIncrementing(false);
      if (size === startStize) setIsIncrementing(true);
    },
    [size, midWay]
  );

  return (
    <div>
      <h1>Ćwiczenie - animacja</h1>
      <div
        style={{
          backgroundColor: 'black',
          width: size,
          height: size,
        }}
      ></div>
    </div>
  );
};
