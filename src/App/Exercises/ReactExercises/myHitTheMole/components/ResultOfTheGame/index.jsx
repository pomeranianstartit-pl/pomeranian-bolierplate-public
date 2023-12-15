import { useState } from 'react';
import { Button } from '../Button/index.jsx';
import './styles.css';

export const ResultOfTheGame = ({ score, time }) => {
  const textScore = () => {
    if (score === 0) {
    }
    if (score === 1) {
      return `${score} złapany kret`;
    }
    if (1 < score < 5) {
      return `${score} złapane krety`;
    }
    if (5 < score < 21) {
      return `${score} złapanych kretów`;
    }
    if (1 < toString(score)[-1] < 5) {
      return `${score} złapane krety`;
    }
  };

  const resultTime = () => {
    if (time > 0) {
      if (time === 1) {
        return '1 sekundy';
      } else {
        return `${time} sekund`;
      }
    }
  };

  return (
    <div className="result--of--game">
      Gratulacje! Twj wynik to {textScore()} w czasie {resultTime()}.
    </div>
  );
};
