import { useState, useEffect } from 'react';
import { formatTime } from '../../Utilities';
import { Button } from '../button/Button';
import './styles.css';

export const HighScore = ({ highScore, noOfElements }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleVisible = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="memo-high-score">
      {/* TODO: add moves, time */}
      {/* <div className="memo-congrats">
        Gratulacje! Pobiłeś rekord! Twój wynik...
      </div> */}
      <div className="memo-congrats">Lista najlepszych wyników</div>

      <Button
        variant={isVisible ? 'primary' : 'secondary'}
        value={isVisible ? 'Zwiń' : 'Rozwiń'}
        onClick={handleVisible}
      />

      {isVisible && (
        <div className="highScore--main--container">
          <ul>
            {Object.entries(highScore).map(([key, data]) => {
              return (
                <li key={key}>
                  <div>Najlepszy wynik dla {key} elementów:</div>
                  <span>
                    {data.moves} ruchów w czasie {formatTime(data.time)}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};
