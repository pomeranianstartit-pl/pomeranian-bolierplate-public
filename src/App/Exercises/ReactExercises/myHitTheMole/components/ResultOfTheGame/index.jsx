import './styles.css';

export const ResultOfTheGame = ({ score, time }) => {
  const gratulations = 'Gratulacje! Twój wynik to';
  const textScore = () => {
    if (score <= 0) {
      return 'Nie udało Ci się złapać ani jednego kreta';
    }
    if (score === 1) {
      return `${score} złapany kret`;
    }
    if ((1 < score) & (score < 5)) {
      return `${score} złapane krety`;
    }
    if ((5 < score) & (score < 21)) {
      return `${score} złapanych kretów`;
    }
    if ((1 < score % 10) & (score % 10 < 5)) {
      return `${score} złapane krety`;
    }
    if (5 < score % 10) {
      return `${score} złapanych kretów`;
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
      {score > 0 && gratulations} {textScore()} w czasie {resultTime()}.
    </div>
  );
};
