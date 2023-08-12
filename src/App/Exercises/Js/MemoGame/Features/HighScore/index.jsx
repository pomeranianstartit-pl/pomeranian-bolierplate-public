import { useState } from 'react';
import { Button } from '../../Components/';
import './styles.css';

export function HighScore(props) {
  const { score, time } = props;
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="memo-high-score">
      <div className="memo-congrats">
        Gratulacje! Pobiłeś rekord twoje punkty to 60 x {score} / {time} w
        sekundach = XX poprzedni rekord to YY
      </div>
      <Button
        value={isVisible ? 'Hide High Score' : 'Show High Score'}
        variant={isVisible ? 'primary' : 'secondary'}
        onClick={() => setIsVisible((prev) => !prev)}
      />
      {isVisible && <div>High Score List</div>}
    </div>
  );
}
