import formatTime from './FormatTime';
import './style.css';
export const MoleGameSettings = ({
  seconds,
  setSeconds,
  moleCount,
  setMoleCount,
  setIsCountingDown,
  gameTime,
  setGameTime,
  score,
  hightScore,
  setScore,
  setStartTime,
}) => {
  const gameTimeOption = [
    { label: '1 minuta', timeValue: 1 * 60 * 1000 },
    { label: '2 minuty', timeValue: 2 * 60 * 1000 },
    { label: '1 GODZINA', timeValue: 60 * 60 * 1000 },
  ];
  const moleCountOption = [
    { label: '1 kret' },
    { label: '2 krety' },
    { label: '3 krety' },
  ];

  return (
    <>
      <div className="moleGameOptions">
        <h4>
          Gra polegająca na podążaniu za krecikiem i trafieniu na kwadrat, w
          którym się pojawił.
        </h4>
        <h2 className="scoreStyle">
          {hightScore > 0 ? `Twój NAJWYŻSZY wynik to ${hightScore}` : ''}
        </h2>
        <h2 className="scoreStyle">
          {score > 0 ? `Twój wynik w tym podejściu to ${score}` : ''}
        </h2>

        <div className="gameOptionsButtons">
          <div className="gameButtonsRows">
            <div>
              <h4>CZAS GRY {formatTime(seconds)} Sekund</h4>
              {gameTimeOption.map(({ label, timeValue }) => (
                <button
                  className={gameTime === timeValue ? 'activeButton' : ''}
                  onClick={() => {
                    setSeconds(timeValue / 1000);
                    setGameTime(timeValue);
                    setStartTime(timeValue);
                    if (label === '1 GODZINA') alert('OSTROŻNIE');
                  }}
                  key={label}
                >
                  {label}
                </button>
              ))}
            </div>

            <div>
              <h4>LICZBA KRETÓW</h4>

              {moleCountOption.map(({ label }) => (
                <button
                  className={
                    moleCount === Number(label[0]) ? 'activeButton' : ''
                  }
                  onClick={() => setMoleCount(Number(label[0]))}
                  key={label}
                >
                  {label}
                </button>
              ))}
            </div>

            <div>
              <h4>PRZYCISKI STERUJĄCE</h4>

              <button
                onClick={() => {
                  setIsCountingDown(true);
                  setScore(0);
                }}
              >
                START
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
