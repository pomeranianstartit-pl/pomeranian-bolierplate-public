import formatTime from '../MemoGame/FormatTime';
export const MemoSettings = ({
  boardSize,
  setBoardSize,
  setGameStart,
  score,
  setScore,
  gameTime,
  finalSettings,
  setGameTime,
}) => {
  const gameTimeOption = [
    { label: '8 elementów', boardValue: 8 },
    { label: '16 elementów', boardValue: 16 },
    { label: '20 elementów', boardValue: 20 },
  ];
  return (
    <>
      <div className="moleGameOptions">
        <h4>
          Gra polegająca na zapamiętywaniu odkrytych kafli i łączeniu ich w pary
        </h4>
        {score > 0 && (
          <h2>
            Gratulacje twój wynik to {score} w czasie {formatTime(gameTime)} na
            liczbie elemwntów równej {finalSettings}
          </h2>
        )}
        <div className="gameOptionsButtons">
          <div className="gameButtonsRows">
            <div>
              <h4>Liczba elementów {boardSize}</h4>
              {gameTimeOption.map(({ label, boardValue }) => (
                <button
                  className={boardSize === boardValue ? 'activeButton' : ''}
                  onClick={() => {
                    setBoardSize(boardValue);
                  }}
                  key={label}
                >
                  {label}
                </button>
              ))}
            </div>
            <div>
              <h4>Przyciski sterujące</h4>
              <button
                onClick={() => {
                  setGameStart(true);
                  setScore(0);
                  setGameTime(0);
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
