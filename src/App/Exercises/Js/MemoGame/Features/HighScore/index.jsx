import { Button } from '../../Components/Button/Button';
import { useEffect, useState } from 'react';
import './styles.css';
export function HighScore(props) {
  // console.log(props);
  const { score, time } = props;
  const [isVisible, setIsVisible] = useState(false);

  const [highScores, setHighScores] = useState({
    4: { record: 0, moves: 0, time: 0 },

    16: { record: 0, moves: 0, time: 0 },

    20: { record: 0, moves: 0, time: 0 },
  });

  console.log(highScores);
  highScores[4].record = 5;
  console.log(highScores);
  function inputTime() {
    highScores[4].time = { time };
  }
  useEffect(inputTime, [time]);

  return (
    <div className="memo-high-score">
      <div className="memo-congrats">
        Gratulacje pobiłeś rekord twoje punkty to 60 x {score} / {time / 1000} w
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
