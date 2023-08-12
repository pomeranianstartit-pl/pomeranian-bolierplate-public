import { Button } from '../../Components/Button/Button';
import { useState } from 'react';
import './styles.css';

const TYPE_OF_GAME_HIGHSCORE_4 = 4;
const TYPE_OF_GAME_HIGHSCORE_16 = 16;
const TYPE_OF_GAME_HIGHSCORE_20 = 20;

const extractSpecyficHighScore = (paramHighScores, pramNoOfElements) => {
  return paramHighScores?.[pramNoOfElements]?.record?.toFixed(2);
};

export function HighScore({
  highScores,
  calculatedScore,
  noOfElements,
  isVisibleRecord,
}) {
  const [isVisible, setIsVisible] = useState(false);

  console.log('isVisibleRecord------>', isVisibleRecord);

  return (
    <div className="memo-high-score">
      <div className="memo-congrats">
        {isVisibleRecord &&
          `Gratulacje! Pobiłeś rekord! Twoje punkty to:
        ${calculatedScore?.toFixed(2)}, poprzedni rekord to:
        ${highScores?.[noOfElements]?.record?.toFixed(2)}`}
      </div>
      <Button
        value={isVisible ? 'Hide High Score' : 'Show High Score'}
        variant={isVisible ? 'primary' : 'secondary'}
        onClick={() => setIsVisible((prev) => !prev)}
      />
      {isVisible && (
        <div className="memo-high-score">
          High Score List:
          <ul>
            <li>
              High score for 4 tiles game:{' '}
              {extractSpecyficHighScore(highScores, TYPE_OF_GAME_HIGHSCORE_4)}
            </li>
            <li>
              High score for 16 tiles game:{' '}
              {extractSpecyficHighScore(highScores, TYPE_OF_GAME_HIGHSCORE_16)}
            </li>
            <li>
              High score for 20 tiles game:{' '}
              {extractSpecyficHighScore(highScores, TYPE_OF_GAME_HIGHSCORE_20)}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
