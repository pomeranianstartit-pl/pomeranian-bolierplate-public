import { useState } from 'react';
import { Button } from '../../Components/Button/Button';
import './styles.css';

export function HighScore(props) {
  const { score, time } = props;
  const [isVisible, setVisible] = useState(false);

  return (
    <div className="memo-high-score">
      <div className="memo-congrat">
        Gratulacje pobiłeś wynik twoje punkty to 60 x {score} / {time} -
        poprzedni rekord to XX
      </div>
      <Button
        onClick={() => setVisible((currentVisibilty) => !currentVisibilty)}
        variant={isVisible ? 'primary' : 'secondary'}
        value={isVisible ? 'hide high score' : 'show high score'}
      />
      {isVisible && <div>high score list</div>}
    </div>
  );
}
